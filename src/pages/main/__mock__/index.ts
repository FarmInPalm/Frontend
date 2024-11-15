import { http, HttpResponse } from "msw";

import { IMAGE_LIST } from "@/pages/main/__mock__/mockImageList";
import { Article } from "@/pages/main/apis/fetchArticleList.api";
import { WeatherData } from "@/pages/main/apis/fetchWeather.api";

export const fetchWeatherHandler = [
    http.get("/api/weather", () => {
        const mockWeatherData: WeatherData = {
            weatherId: 1,
            weatherDate: new Date().toISOString(),
            temperature: 22.5,
            humidity: 60,
            groundTemperature: 20.0,
            groundHumidity: 65,
            rainGauge: 1.2,
            rainAmount: 5.5,
        };

        return HttpResponse.json(mockWeatherData);
    }),
];

export const fetchArticleListHandler = [
    http.get("/api/article", () => {
        const mockData: Article[] = Array.from({ length: 4 }, (_, index) => ({
            articleId: index + 1,
            articleTitle: `Mock Article ${index + 1}`,
            articleContent: `This is the content of the mock article number ${index + 1}.`,
            articleDate: new Date().toISOString(),
            articleImagePath: IMAGE_LIST[index],
        }));

        return HttpResponse.json(mockData);
    }),
];
