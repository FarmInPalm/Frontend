import { AxiosResponse } from "axios";

import { fetchInstance } from "@/apis/instance";
import { useQuery } from "@tanstack/react-query";

export interface Article {
    articleId: number;
    articleTitle: string;
    articleContent: string;
    articleDate: string;
    articleImagePath: string;
}

const fetchArticleListPath = () => "/api/article";

export const fetchArticleList = async (): Promise<Article[]> => {
    const response: AxiosResponse<Article[]> = await fetchInstance.get(fetchArticleListPath());
    return response.data;
};

export const useFetchArticleList = () => {
    return useQuery<Article[], Error>({
        queryKey: ["articles"],
        queryFn: fetchArticleList,
        staleTime: 1000 * 60 * 5,
        retry: 3,
    });
};
