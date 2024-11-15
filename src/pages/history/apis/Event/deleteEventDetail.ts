import { fetchInstance } from "@/apis/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteEventResponse {
    success: boolean;
}

export const deleteEventDetail = async (eventId: number): Promise<DeleteEventResponse> => {
    const response = await fetchInstance.delete<DeleteEventResponse>(`/api/event/detail/${eventId}`);
    return response.data;
};

export const useDeleteEventDetail = () => {
    const queryClient = useQueryClient();

    return useMutation<DeleteEventResponse, Error, number>({
        mutationFn: deleteEventDetail,
        onSuccess: () => {
            console.log("Event successfully deleted.");
            queryClient.invalidateQueries({ queryKey: ["eventList"] });
        },
        onError: (error) => {
            console.error("Failed to delete event:", error);
        },
    });
};

// import { fetchInstance } from "@/apis/instance";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// interface DeleteMonitorResponse {
//     success: boolean;
// }
// export const deleteMonitorDetail = async (monitorId: number): Promise<DeleteMonitorResponse> => {
//     const response = await fetchInstance.delete<DeleteMonitorResponse>(`/api/monitor/detail/${monitorId}`);
//     return response.data;
// };
// export const useDeleteMonitorDetail = () => {
//     const queryClient = useQueryClient();
//     return useMutation<DeleteMonitorResponse, Error, number>({
//         mutationFn: deleteMonitorDetail,
//         onSuccess: () => {
//             console.log("Monitor successfully deleted.");
//             queryClient.invalidateQueries({ queryKey: ["monitorList"] });
//         },
//         onError: (error) => {
//             console.error("Failed to delete monitor:", error);
//         },
//     });
// };
