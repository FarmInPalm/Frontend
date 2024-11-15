import { fetchInstance } from "@/apis/instance";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface StockItem {
    stockId: number;
    stockName: string;
    stockQuantity: number;
    stockUnit: string;
}

export const fetchUserStock = async (userId: number): Promise<StockItem[]> => {
    const response = await fetchInstance.get<StockItem[]>(`/api/stock/${userId}`);
    return response.data;
};

export const useFetchUserStock = (userId: number): UseQueryResult<StockItem[], Error> => {
    return useQuery<StockItem[], Error>({
        queryKey: ["userStock", userId],
        queryFn: () => fetchUserStock(userId),
        enabled: !!userId,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
};
