import { fetchInstance } from "@/apis/instance";
import { useQuery } from "@tanstack/react-query";

interface FarmDetailResponse {
    monitorId: number;
    monitorName: string;
    temperature: number;
    humidity: number;
    groundTemperature: number;
    groundHumidity: number;
    co2Concentration: number;
}

export const fetchFarmDetail = async (monitorId: number): Promise<FarmDetailResponse> => {
    const response = await fetchInstance.get<FarmDetailResponse>(`/api/monitor/detail/${monitorId}`);
    return response.data;
};

export const useFetchFarmDetail = (monitorId: number) => {
    return useQuery<FarmDetailResponse>({
        queryKey: ["monitorDetail", monitorId],
        queryFn: () => fetchFarmDetail(monitorId),
        enabled: !!monitorId,
    });
};
