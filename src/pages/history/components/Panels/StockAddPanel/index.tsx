import { useState } from "react";

import { useAddStockDetail } from "@/pages/history/apis/Stock/createUserStock";

import { PanelWrapper, ModalOverlay, CloseButton, AddButton, InputField, TitleText } from "./style";

interface StockAddPanelProps {
    onClose: () => void;
}

const StockAddPanel = ({ onClose }: StockAddPanelProps) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");

    const { mutate: addStock } = useAddStockDetail();

    const handleAdd = () => {
        const stockData = {
            stockName: name,
            stockQuantity: parseFloat(quantity),
            stockUnit: unit,
        };

        addStock(stockData, {
            onSuccess: () => {
                console.log("Stock item successfully added.");
                onClose();
            },
            onError: (error) => {
                console.error("Failed to add stock item:", error);
            },
        });
    };

    return (
        <ModalOverlay>
            <PanelWrapper>
                <TitleText>새로운 품목</TitleText>
                <CloseButton onClick={onClose}>✕</CloseButton>
                <InputField placeholder="품목명" value={name} onChange={(e) => setName(e.target.value)} />
                <InputField placeholder="수량" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <InputField placeholder="단위" value={unit} onChange={(e) => setUnit(e.target.value)} />
                <AddButton onClick={handleAdd}>추가하기</AddButton>
            </PanelWrapper>
        </ModalOverlay>
    );
};

export default StockAddPanel;
