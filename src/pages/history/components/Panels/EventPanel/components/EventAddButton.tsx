import { useState } from "react";

import styled from "@emotion/styled";

import EventAddPanel from "@/pages/history/components/Panels/EventAddPanel";

import { ModalOverlay } from "./style";

const Button = styled.div`
    width: 80%;
    padding: 20px;
    color: white;
    background-color: #34c759;
    border-radius: 500px;
    text-align: center;
    cursor: pointer;
`;

export const EventAddButton = ({ refetchEvents }: { refetchEvents: () => void }) => {
    const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

    const openAddPanel = () => setIsAddPanelOpen(true);
    const closeAddPanel = () => {
        setIsAddPanelOpen(false);
        refetchEvents();
    };

    return (
        <>
            <Button onClick={openAddPanel}>+ 이벤트 추가하기</Button>
            {isAddPanelOpen && (
                <ModalOverlay>
                    <EventAddPanel onClose={closeAddPanel} />
                </ModalOverlay>
            )}
        </>
    );
};
