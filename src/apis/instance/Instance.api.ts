import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { QueryClient } from "@tanstack/react-query";

const IS_MSW_ENV = import.meta.env.VITE_RUN_MSW === "true";

const baseURL = IS_MSW_ENV
    ? "http://localhost:5173"
    : "https://port-0-farminpalmserver-m1bow3hn7b1c4b46.sel4.cloudtype.app";

export const createInstance = (config: AxiosRequestConfig): AxiosInstance => {
    const instance = axios.create({
        timeout: 5000,
        baseURL,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...config.headers,
        },
        ...config,
    });

    return instance;
};

export const fetchInstance = createInstance({});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            refetchOnMount: true,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
        },
    },
});
