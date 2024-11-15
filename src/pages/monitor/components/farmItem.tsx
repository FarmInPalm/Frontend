import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

import styled from "@emotion/styled";

interface FarmItemProps {
    farmId: number;
    farmName: string;
    onClick: () => void;
    onDelete: () => void;
}

const FarmItem: React.FC<FarmItemProps> = ({ farmId, farmName, onClick, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMenuClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={onClick}>
                <span>{`${farmName}`}</span>
                <MenuIcon onClick={handleMenuClick}>
                    <FaTrash />
                </MenuIcon>
            </Button>
            {isModalOpen && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalText>정말로 삭제하시겠습니까?</ModalText>
                        <ButtonWrapper>
                            <DeleteButton
                                onClick={() => {
                                    onDelete();
                                    closeModal();
                                }}
                            >
                                삭제하기
                            </DeleteButton>
                            <CancelButton onClick={closeModal}>취소</CancelButton>
                        </ButtonWrapper>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};

export default FarmItem;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e0f7df;
    border-radius: 12px;
    padding: 12px 16px;
    border: none;
    width: 100%;
    font-size: 16px;
    color: #2e7d32;
    font-weight: bold;
    cursor: pointer;
`;

const MenuIcon = styled.span`
    font-size: 18px;
    cursor: pointer;
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
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 300px;
    text-align: center;
`;

const ModalText = styled.p`
    font-size: 16px;
    margin-bottom: 16px;
    color: #333;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`;

const DeleteButton = styled.button`
    background-color: #e57373;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #d32f2f;
    }
`;

const CancelButton = styled.button`
    background-color: #ccc;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #9e9e9e;
    }
`;
