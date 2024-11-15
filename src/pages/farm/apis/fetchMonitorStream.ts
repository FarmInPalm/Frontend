import { fetchInstance } from "@/apis/instance";
import { useQuery } from "@tanstack/react-query";

interface MonitorStreamResponse {
    resource: string;
    position: number;
    count: number;
}

export const fetchMonitorStream = async (): Promise<MonitorStreamResponse> => {
    const response = await fetchInstance.get<MonitorStreamResponse>("/api/monitor/stream", {
        responseType: "blob",
    });
    return response.data;
};

export const useFetchMonitorStream = () => {
    return useQuery<MonitorStreamResponse, Error>({
        queryKey: ["monitorStream"],
        queryFn: fetchMonitorStream,
    });
};
