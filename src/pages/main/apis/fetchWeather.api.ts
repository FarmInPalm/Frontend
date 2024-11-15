import type { AxiosResponse } from "axios";

import { fetchInstance } from "@/apis/instance";
import { useQuery } from "@tanstack/react-query";

export interface WeatherData {
    weatherId: number;
    weatherDate: string;
    temperature: number;
    humidity: number;
    groundTemperature: number;
    groundHumidity: number;
    rainGauge: number;
    rainAmount: number;
}

const fetchWeatherPath = () => "/api/weather";

export const fetchWeatherData = async (): Promise<WeatherData> => {
    const response: AxiosResponse<WeatherData> = await fetchInstance.get(fetchWeatherPath());
    return response.data;
};

export const useFetchWeatherData = () => {
    return useQuery<WeatherData, Error>({
        queryKey: ["weatherData"],
        queryFn: fetchWeatherData,
        staleTime: 1000 * 60 * 5,
        retry: 3,
    });
};
