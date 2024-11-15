import { fetchArticleListHandler, fetchWeatherHandler } from "@/pages/main/__mock__";

export const handlers = [...fetchArticleListHandler, ...fetchWeatherHandler];
