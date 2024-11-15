import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import { Spinner } from "@/components/common/Spinner";

import { useCreateMonitorFarm } from "@/pages/monitor/apis/createMonitorFarm";
import { useDeleteMonitor } from "@/pages/monitor/apis/deleteMonitorFarm";
import { useFetchMonitorFarm } from "@/pages/monitor/apis/fetchMonitorFarm";
import AddFarmButton from "@/pages/monitor/components/addFarmButton";
import FarmItem from "@/pages/monitor/components/farmItem";

interface Farm {
    monitorId: number;
    monitorName: string;
    temperature: number;
    humidity: number;
    groundTemperature: number;
    groundHumidity: number;
    co2Concentration: number;
}

const MonitoringPage: React.FC = () => {
    const navigate = useNavigate();
    const userId = 1;
    const { data: fetchedFarms, isLoading, error, refetch } = useFetchMonitorFarm(userId);
    const [farms, setFarms] = useState<Farm[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedFarmId, setSelectedFarmId] = useState<number | null>(null);
    const [newFarmName, setNewFarmName] = useState("");

    const { mutate: addFarmByName } = useCreateMonitorFarm();
    const { mutate: deleteFarm } = useDeleteMonitor();

    useEffect(() => {
        if (fetchedFarms) {
            setFarms(fetchedFarms);
        }
    }, [fetchedFarms]);

    const handleAddFarmClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setNewFarmName("");
    };

    const handleConfirmAddFarm = () => {
        if (!newFarmName) return;

        addFarmByName(newFarmName, {
            onSuccess: (newFarm) => {
                setFarms((prevFarms) => [...prevFarms, newFarm]);
                handleModalClose();
                refetch();
            },
            onError: (error) => {
                console.error("농장 정보를 추가하는데 실패했습니다.", error);
            },
        });
    };

    const handleFarmItemClick = (farmId: number) => {
        navigate(`/monitor/${farmId}`);
    };

    const handleOpenDeleteModal = (farmId: number) => {
        setSelectedFarmId(farmId);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedFarmId === null) return;

        deleteFarm(selectedFarmId, {
            onSuccess: () => {
                console.log("농장 삭제 성공");
                refetch();
                setDeleteModalOpen(false);
                setSelectedFarmId(null);
            },
            onError: (error) => {
                console.error("농장을 삭제하는데 실패했습니다.", error);
            },
        });
    };

    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false);
        setSelectedFarmId(null);
    };

    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading farms: {error.message}</div>;

    return (
        <Container>
            <Content>
                {farms.map((farm) => (
                    <Wrapper key={farm.monitorId}>
                        <FarmItem
                            farmId={farm.monitorId}
                            farmName={farm.monitorName}
                            onClick={() => handleFarmItemClick(farm.monitorId)}
                            onDelete={() => handleOpenDeleteModal(farm.monitorId)}
                        />
                    </Wrapper>
                ))}
                <Wrapper isLast>
                    <AddFarmButton onClick={handleAddFarmClick} />
                </Wrapper>
            </Content>
            {isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalTitle>새 농장 추가</ModalTitle>
                        <ModalInput
                            type="text"
                            placeholder="농장 이름을 입력하세요"
                            value={newFarmName}
                            onChange={(e) => setNewFarmName(e.target.value)}
                        />
                        <ModalButtonGroup>
                            <ModalButton onClick={handleConfirmAddFarm}>추가</ModalButton>
                            <ModalButton onClick={handleModalClose} cancel>
                                취소
                            </ModalButton>
                        </ModalButtonGroup>
                    </ModalContent>
                </ModalOverlay>
            )}
            {deleteModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalTitle>정말 삭제하시겠습니까?</ModalTitle>
                        <ModalButtonGroup>
                            <ModalButton onClick={handleConfirmDelete}>삭제</ModalButton>
                            <ModalButton onClick={handleCloseDeleteModal} cancel>
                                취소
                            </ModalButton>
                        </ModalButtonGroup>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default MonitoringPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-height: 870px;
    overflow: hidden;
`;

const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin-top: auto;
    overflow-y: auto;
    padding-right: 16px;

    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Wrapper = styled.div<{ isLast?: boolean }>`
    margin-bottom: 16px;
    text-align: center;
    align-items: center;
    justify-content: center;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

const ModalTitle = styled.h2`
    margin-bottom: 16px;
    font-size: 20px;
`;

const ModalInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const ModalButtonGroup = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
`;

const ModalButton = styled.button<{ cancel?: boolean }>`
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${({ cancel }) => (cancel ? "#ccc" : "#38a169")};
    color: #fff;

    &:hover {
        background-color: ${({ cancel }) => (cancel ? "#b3b3b3" : "#2f855a")};
    }

    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }
`;
