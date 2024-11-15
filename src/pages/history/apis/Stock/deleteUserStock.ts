import { fetchInstance } from "@/apis/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteStockResponse {
    success: boolean;
}
export const deleteStockDetail = async (stockId: number): Promise<DeleteStockResponse> => {
    const response = await fetchInstance.delete<DeleteStockResponse>(`/api/stock/detail/${stockId}`);
    return response.data;
};

export const useDeleteStockDetail = () => {
    const queryClient = useQueryClient();

    return useMutation<DeleteStockResponse, Error, number>({
        mutationFn: deleteStockDetail,
        onSuccess: () => {
            console.log("Stock item successfully deleted.");
            queryClient.invalidateQueries({ queryKey: ["userStock"] });
        },
        onError: (error) => {
            console.error("Failed to delete stock item:", error);
        },
    });
};
