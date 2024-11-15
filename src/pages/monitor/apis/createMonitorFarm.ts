import { fetchInstance } from "@/apis/instance";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export interface FarmCreateResponse {
    monitorId: number;
    monitorName: string;
    temperature: number;
    humidity: number;
    groundTemperature: number;
    groundHumidity: number;
    co2Concentration: number;
}

interface FarmCreateRequest {
    monitorName: string;
}

export const createMonitorFarm = async (monitorName: string): Promise<FarmCreateResponse> => {
    const response = await fetchInstance.post<FarmCreateResponse>("/api/monitor/detail", {
        monitorName,
    } as FarmCreateRequest);
    return response.data;
};

export const useCreateMonitorFarm = (): UseMutationResult<FarmCreateResponse, Error, string> => {
    return useMutation<FarmCreateResponse, Error, string>({
        mutationFn: createMonitorFarm,
        onSuccess: (data) => {
            console.log("Fetch successful", data);
        },
        onError: (error) => {
            console.error("Error fetching farm details:", error);
        },
    });
};
