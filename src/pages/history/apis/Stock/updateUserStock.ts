import { fetchInstance } from "@/apis/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateStockRequest {
    stockName: string;
    stockQuantity: number;
    stockUnit: string;
}

interface UpdateStockResponse {
    stockId: number;
    stockName: string;
    stockQuantity: number;
    stockUnit: string;
}

export const updateUserStock = async (stockId: number, stockData: UpdateStockRequest): Promise<UpdateStockResponse> => {
    const response = await fetchInstance.put<UpdateStockResponse>(`/api/stock/detail/${stockId}`, stockData);
    return response.data;
};

export const useUpdateUserStock = () => {
    const queryClient = useQueryClient();

    return useMutation<UpdateStockResponse, Error, { stockId: number; stockData: UpdateStockRequest }>({
        mutationFn: ({ stockId, stockData }) => updateUserStock(stockId, stockData),
        onSuccess: () => {
            console.log("Stock item successfully updated.");
            queryClient.invalidateQueries({ queryKey: ["userStock"] });
        },
        onError: (error) => {
            console.error("Failed to update stock item:", error);
        },
    });
};
