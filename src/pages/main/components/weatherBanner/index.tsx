import React from "react";
import { WiThermometer, WiHumidity, WiRaindrop } from "react-icons/wi";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { Spinner } from "@/components/common/Spinner";

import { useFetchWeatherData } from "@/pages/main/apis/fetchWeather.api";
import * as Styles from "@/pages/main/components/weatherBanner/index.style";

const WeatherBanner: React.FC = () => {
    const { data: weather, isLoading, isError } = useFetchWeatherData();

    if (isLoading) return <Spinner />;
    if (isError) return <div>날씨 정보를 불러오는 데 실패했습니다.</div>;

    return (
        <BannerWrapper>
            <Title>현재 날씨</Title>
            <WeatherInfo>
                <InfoItem delay="0.1s">
                    <WiThermometer />
                    <span>기온: {weather?.temperature}°C</span>
                </InfoItem>
                <InfoItem delay="0.2s">
                    <WiHumidity />
                    <span>습도: {weather?.humidity}%</span>
                </InfoItem>
                <InfoItem delay="0.3s">
                    <WiThermometer />
                    <span>지중 온도: {weather?.groundTemperature}°C</span>
                </InfoItem>
                <InfoItem delay="0.4s">
                    <WiHumidity />
                    <span>지중 습도: {weather?.groundHumidity}%</span>
                </InfoItem>
                <InfoItem delay="0.5s">
                    <WiRaindrop />
                    <span>강수량: {weather?.rainAmount}mm</span>
                </InfoItem>
            </WeatherInfo>
        </BannerWrapper>
    );
};

export default WeatherBanner;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const BannerWrapper = styled(Styles.BannerWrapper)`
    animation: ${fadeIn} 0.8s ease-out;
    background-color: #f0f8ff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Styles.Title)`
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
`;

const WeatherInfo = styled(Styles.WeatherInfo)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

const InfoItem = styled(Styles.InfoItem)<{ delay: string | undefined }>`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: #555;
    animation: ${fadeIn} 0.6s ease-out forwards;
    animation-delay: ${({ delay }) => delay};
    transform: translateY(20px);
    opacity: 0;

    svg {
        font-size: 1.8rem;
        color: #4a90e2;
        margin-right: 0.5rem;
        transition: transform 0.3s ease;
    }

    &:hover svg {
        transform: scale(1.2);
    }
`;
