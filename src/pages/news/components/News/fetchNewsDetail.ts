import { fetchInstance } from "@/apis/instance";
import { useQuery } from "@tanstack/react-query";

interface NewsDetailResponse {
    articleId: number;
    articleTitle: string;
    articleContent: string;
    articleDate: string;
    articleImagePath: string;
}

export const fetchNewsDetail = async (articleId: number): Promise<NewsDetailResponse> => {
    const response = await fetchInstance.get<NewsDetailResponse>(`/api/article/${articleId}`);
    return response.data;
};

export const useFetchNewsDetail = (articleId: number) => {
    return useQuery<NewsDetailResponse>({
        queryKey: ["articleDetail", articleId],
        queryFn: () => fetchNewsDetail(articleId),
        enabled: !!articleId,
    });
};
