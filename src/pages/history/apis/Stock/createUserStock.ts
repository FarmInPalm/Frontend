import { fetchInstance } from "@/apis/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface AddStockRequest {
    stockName: string;
    stockQuantity: number;
    stockUnit: string;
}

interface AddStockResponse {
    stockId: number;
    stockName: string;
    stockQuantity: number;
    stockUnit: string;
}

export const addStockDetail = async (data: AddStockRequest): Promise<AddStockResponse> => {
    const response = await fetchInstance.post<AddStockResponse>("/api/stock/detail", data);
    return response.data;
};

export const useAddStockDetail = () => {
    const queryClient = useQueryClient();

    return useMutation<AddStockResponse, Error, AddStockRequest>({
        mutationFn: addStockDetail,
        onSuccess: () => {
            console.log("Stock item successfully added.");
            queryClient.invalidateQueries({ queryKey: ["stockList"] });
        },
        onError: (error) => {
            console.error("Failed to add stock item:", error);
        },
    });
};
