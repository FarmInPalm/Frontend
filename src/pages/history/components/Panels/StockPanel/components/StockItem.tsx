import { useState } from "react";
import { IoListOutline } from "react-icons/io5";

import StockModifyPanel from "@/pages/history/components/Panels/StockModifyPanel";

import { StockItemWrapper, ItemWrapper, ItemTitle, ItemDescriptor } from "../style";

interface StockItemProps {
    itemID: number;
    itemLabel: string;
    itemCount: number;
    itemUnit: string;
}

const StockItem = ({ itemID, itemLabel, itemCount, itemUnit }: StockItemProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <StockItemWrapper>
                <ItemWrapper>
                    <ItemTitle>{itemLabel}</ItemTitle>
                    <ItemDescriptor>
                        {itemCount} {itemUnit}
                    </ItemDescriptor>
                </ItemWrapper>
                <IoListOutline
                    onClick={() => {
                        handleOpenModal();
                    }}
                />
            </StockItemWrapper>
            {isModalOpen && <StockModifyPanel stockId={itemID} onClose={handleCloseModal} />}
        </>
    );
};

export default StockItem;
