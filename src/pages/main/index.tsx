import React, { useState } from "react";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import WeatherBanner from "@/pages/main/components/weatherBanner";

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #34c759;
    animation: ${fadeInUp} 1.2s ease-out;
`;

const Subtitle = styled.h2`
    font-size: 1.7rem;
    font-weight: normal;
    color: grey;
    font-weight: bold;
    animation: ${fadeInUp} 1.5s ease-out;
`;

const Separator = styled.div`
    width: 50px;
    height: 4px;
    background-color: grey;
    margin: 20px 0;
    animation: ${fadeInUp} 1.8s ease-out;
`;

const MainPage: React.FC = () => {
    return (
        <PageContainer>
            <Title>FarmInPalm</Title>
            <Subtitle>내 손안의 농장</Subtitle>
            <Separator />
            <WeatherBanner />
            <SeamLessCloud></SeamLessCloud>
        </PageContainer>
    );
};

export default MainPage;

const Cloud = styled.div<{ bgPositionX: number }>`
    position: absolute;
    top: 200px;
    z-index: 0;
    width: 500px;
    height: 80vh;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 255), rgba(255, 255, 255, 0)),
        url("https://t3.ftcdn.net/jpg/05/73/59/02/360_F_573590213_hrZMGPMzz3awKZStcITAXiVSNUqNNRtX.jpg");
    background-position-x: ${(props) => props.bgPositionX}px;

    // background-image: url("https://t3.ftcdn.net/jpg/05/73/59/02/360_F_573590213_hrZMGPMzz3awKZStcITAXiVSNUqNNRtX.jpg");
    opacity: 0.7;
    border-top-left-radius: 00px;
`;

const SeamLessCloud: React.FC = () => {
    const [x, setX] = useState(0);
    requestAnimationFrame(draw);
    function draw() {
        setX(x + 0.2);
        requestAnimationFrame(draw);
    }
    return <Cloud bgPositionX={x}></Cloud>;
};
