import React from "react";
import { IoWater, IoPinSharp, IoEarth, IoPartlySunnyOutline, IoRainyOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

import styled from "@emotion/styled";

import { Spinner } from "@/components/common/Spinner";

import SensorData from "@/pages/farm/components/sensorData";

import { useFetchNewsDetail } from "./fetchNewsDetail";

const NewsDetailPage: React.FC = () => {
    const navigate = useNavigate();
    const { articleId } = useParams<{ articleId: string }>();
    const { data, isLoading, error } = useFetchNewsDetail(Number(articleId));
    console.log(articleId);

    if (isLoading) return <Spinner />;
    if (error) return <ErrorMessage>Failed to load data.</ErrorMessage>;
    if (!data) return null;

    const { articleId: id, articleTitle, articleContent, articleDate, articleImagePath } = data;
    return (
        <TotalWrapper>
            <Header>
                <NewsName>
                    <ExitButton onClick={() => navigate("/news")}>←</ExitButton>
                    {articleTitle}
                </NewsName>
            </Header>
            <Container>
                <img src={articleImagePath} alt={articleTitle} style={{ width: "100%", height: "100%" }} />

                <Text>{articleContent}</Text>
            </Container>
        </TotalWrapper>
    );
};

const ExitButton = styled.div`
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default NewsDetailPage;

const TotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    height: 75vh;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    margin: 20px;
    background-color: lightgrey;
    border-radius: 25px;
`;

const Header = styled.div`
    width: 90%;
    text-align: center;
    margin-bottom: 16px;
`;

const NewsName = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background-color: #38a169;
    padding: 8px 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.p`
    font-size: 15px;
    line-height: 30px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ErrorMessage = styled.div`
    font-size: 18px;
    color: #e53e3e;
    margin-top: 20px;
`;
