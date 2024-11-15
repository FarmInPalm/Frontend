import { Spinner } from "@/components/common/Spinner";

import { useFetchUserStock } from "@/pages/history/apis/Stock/fetchUserStock";

import { PanelWrapper } from "../PanelStyle";
import StockItem from "./components/StockItem";
import StockItemAddButton from "./components/StockItemAddButton";

const StockPanel: React.FC = () => {
    const { data: items, isLoading, error, refetch } = useFetchUserStock(1);

    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading stock data.</div>;

    return (
        <PanelWrapper>
            {items?.map((item) => (
                <StockItem
                    key={item.stockId}
                    itemID={item.stockId}
                    itemLabel={item.stockName}
                    itemCount={item.stockQuantity}
                    itemUnit={item.stockUnit}
                />
            ))}
            <StockItemAddButton refetchEvents={refetch} />
        </PanelWrapper>
    );
};

export default StockPanel;
