import { fetchInstance } from "@/apis/instance";
import { QueryClient, useMutation, UseMutationResult } from "@tanstack/react-query";

export interface EventCreateRequest {
    eventTitle: string;
    eventStartDate: string;
    eventStartDay: string;
    eventEndDate: string;
    eventEndDay: string;
}

export interface EventDetailResponse {
    eventId: number;
    eventTitle: string;
    eventStartDate: string;
    eventStartDay: string;
    eventEndDate: string;
    eventEndDay: string;
}

export const createEventDetail = async (eventData: EventCreateRequest): Promise<EventDetailResponse> => {
    const response = await fetchInstance.post<EventDetailResponse>("/api/event/detail", eventData);
    return response.data;
};

export const useCreateEventDetail = (): UseMutationResult<EventDetailResponse, Error, EventCreateRequest> => {
    const queryClient = new QueryClient();

    return useMutation<EventDetailResponse, Error, EventCreateRequest>({
        mutationFn: createEventDetail,
        onSuccess: (data) => {
            console.log("Event created successfully", data);
            queryClient.invalidateQueries({ queryKey: ["eventList"] });
        },
        onError: (error) => {
            console.error("Error creating event:", error);
        },
    });
};
