import { fetchInstance } from "@/apis/instance";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export interface EventItem {
    eventId: number;
    eventTitle: string;
    eventStartDate: string;
    eventStartDay: string;
    eventEndDate: string;
    eventEndDay: string;
}

export const fetchEventList = async (userId: number): Promise<EventItem[]> => {
    const response = await fetchInstance.get<EventItem[]>(`/api/event/${userId}`);
    return response.data;
};

export const useFetchEventList = (userId: number): UseQueryResult<EventItem[], Error> => {
    return useQuery<EventItem[], Error>({
        queryKey: ["eventList", userId],
        queryFn: () => fetchEventList(userId),
        enabled: !!userId,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
};
