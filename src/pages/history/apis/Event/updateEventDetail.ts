import { fetchInstance } from "@/apis/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateEventRequest {
    eventTitle: string;
    eventStartDate: string;
    eventEndDate: string;
}

interface UpdateEventResponse {
    eventId: number;
    eventTitle: string;
    eventStartDate: string;
    eventEndDate: string;
}

export const updateEventDetail = async (
    eventId: number,
    eventData: UpdateEventRequest,
): Promise<UpdateEventResponse> => {
    const response = await fetchInstance.put<UpdateEventResponse>(`/api/event/detail/${eventId}`, eventData);
    return response.data;
};

export const useUpdateEventDetail = () => {
    const queryClient = useQueryClient();

    return useMutation<UpdateEventResponse, Error, { eventId: number; eventData: UpdateEventRequest }>({
        mutationFn: ({ eventId, eventData }) => updateEventDetail(eventId, eventData),
        onSuccess: () => {
            console.log("Event successfully updated.");
            queryClient.invalidateQueries({ queryKey: ["eventList"] });
        },
        onError: (error) => {
            console.error("Failed to update event:", error);
        },
    });
};
