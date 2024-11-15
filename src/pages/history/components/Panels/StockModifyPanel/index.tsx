import { useState } from "react";

import { useDeleteStockDetail } from "@/pages/history/apis/Stock/deleteUserStock";
import { useUpdateUserStock } from "@/pages/history/apis/Stock/updateUserStock";

import { PanelWrapper, CloseButton, Button, InputField, TitleText, ButtonWrapper, ModalOverlay } from "./style";

interface StockModifyPanelProps {
    onClose: () => void;
    stockId: number;
}

const StockModifyPanel = ({ onClose, stockId }: StockModifyPanelProps) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");

    const { mutate: updateStock } = useUpdateUserStock();
    const { mutate: deleteStock } = useDeleteStockDetail();
    const handleUpdate = () => {
        updateStock(
            {
                stockId,
                stockData: {
                    stockName: name,
                    stockQuantity: Number(quantity),
                    stockUnit: unit,
                },
            },
            {
                onSuccess: () => {
                    console.log("Stock item successfully updated.");
                    onClose();
                },
                onError: (error) => {
                    console.error("Failed to update stock item:", error);
                },
            },
        );
    };

    const handleDelete = () => {
        deleteStock(stockId, {
            onSuccess: () => {
                console.log("Stock item successfully deleted.");
                onClose();
            },
            onError: (error) => {
                console.error("Failed to delete stock item:", error);
            },
        });
    };

    return (
        <ModalOverlay>
            <PanelWrapper>
                <TitleText>품목 정보 수정</TitleText>
                <CloseButton onClick={onClose}>✕</CloseButton>
                <InputField placeholder="품목명" value={name} onChange={(e) => setName(e.target.value)} />
                <InputField placeholder="수량" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <InputField placeholder="단위" value={unit} onChange={(e) => setUnit(e.target.value)} />
                <ButtonWrapper>
                    <Button onClick={handleUpdate}>수정하기</Button>
                    <Button onClick={handleDelete}>삭제하기</Button>
                </ButtonWrapper>
            </PanelWrapper>
        </ModalOverlay>
    );
};

export default StockModifyPanel;
