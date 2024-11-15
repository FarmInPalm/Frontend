import { fetchInstance } from "@/apis/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteMonitorResponse {
    success: boolean;
}

const deleteMonitor = async (monitorId: number): Promise<DeleteMonitorResponse> => {
    const response = await fetchInstance.delete<DeleteMonitorResponse>(`/api/monitor/detail/${monitorId}`);
    return response.data;
};

export const useDeleteMonitor = () => {
    const queryClient = useQueryClient();

    return useMutation<DeleteMonitorResponse, Error, number>({
        mutationFn: deleteMonitor,
        onSuccess: () => {
            console.log("Monitor successfully deleted.");
            queryClient.invalidateQueries({ queryKey: ["monitorFarm"] });
        },
        onError: (error) => {
            console.error("Failed to delete monitor:", error);
        },
    });
};
