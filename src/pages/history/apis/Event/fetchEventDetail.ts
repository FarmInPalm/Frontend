import { fetchInstance } from "@/apis/instance";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface EventDetailResponse {
    eventId: number;
    eventTitle: string;
    eventStartDate: string;
    eventStartDay: string;
    eventEndDate: string;
    eventEndDay: string;
}

export const fetchEventDetail = async (eventId: number): Promise<EventDetailResponse> => {
    const response = await fetchInstance.get<EventDetailResponse>(`/api/event/detail/${eventId}`);
    return response.data;
};

export const useFetchEventDetail = (eventId: number): UseQueryResult<EventDetailResponse, Error> => {
    return useQuery<EventDetailResponse, Error, EventDetailResponse>({
        queryKey: ["eventDetail", eventId],
        queryFn: () => fetchEventDetail(eventId),
        enabled: !!eventId,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
};
