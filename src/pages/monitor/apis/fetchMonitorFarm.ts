import { fetchInstance } from "@/apis/instance";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface MonitorFarm {
    monitorId: number;
    monitorName: string;
    temperature: number;
    humidity: number;
    groundTemperature: number;
    groundHumidity: number;
    co2Concentration: number;
}

export const fetchMonitorFarm = async (userId: number): Promise<MonitorFarm[]> => {
    const response = await fetchInstance.get<MonitorFarm[]>(`/api/monitor/${userId}`);
    return response.data;
};

export const useFetchMonitorFarm = (userId: number): UseQueryResult<MonitorFarm[], Error> => {
    return useQuery<MonitorFarm[], Error>({
        queryKey: ["monitorFarm", userId],
        queryFn: () => fetchMonitorFarm(userId),
        enabled: !!userId,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
};
