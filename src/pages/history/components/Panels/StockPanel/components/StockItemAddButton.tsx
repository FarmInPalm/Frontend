import { useState } from "react";

import StockAddPanel from "@/pages/history/components/Panels/StockAddPanel";

import { Button, ModalOverlay } from "../style";

const StockItemAddButton = ({ refetchEvents }: { refetchEvents: () => void }) => {
    const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

    const openAddPanel = () => setIsAddPanelOpen(true);
    const closeAddPanel = () => {
        setIsAddPanelOpen(false);
        refetchEvents();
    };

    return (
        <>
            <Button onClick={openAddPanel}>+ 재고 품목 추가하기</Button>
            {isAddPanelOpen && (
                <ModalOverlay>
                    <StockAddPanel onClose={closeAddPanel} />
                </ModalOverlay>
            )}
        </>
    );
};

export default StockItemAddButton;
