import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import { useFetchArticleList } from "../../apis/fetchArticleList.api";

export const ScrollLimiter = styled.div`
    margin-top: 20px;
    height: 46vh;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ArticleCardWrapper = styled.div`
    display: flex;
    gap: 10px;
    background-color: #d8f8d3;
    margin: 20px;
    padding: 5px;
    border-radius: 10px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const DateText = styled.div`
    font-size: 12px;
`;

export const TitleText = styled.div`
    font-weight: bold;
`;

type ArticleCardProps = {
    title: string;
    date: string;
    img: string;
    content: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, img, content }) => {
    return (
        <ArticleCardWrapper>
            <img src={img} alt={title} style={{ width: "80px", height: "80px", borderRadius: "40px" }} />
            <TextWrapper>
                <DateText>{date}</DateText>
                <TitleText>{title}</TitleText>
                {content.substring(0, 20) + "..."}
            </TextWrapper>
            {/* <p>{content}</p> */}
        </ArticleCardWrapper>
    );
};

const SubCard: React.FC = () => {
    const navigate = useNavigate();
    const { data: articles, isLoading, isError } = useFetchArticleList();
    const [modalOpen, setmodalOpen] = useState(false);
    return (
        <>
            <ScrollLimiter>
                {/* images={articles?.map((article) => article.articleImagePath) || []} */}
                {articles?.map((article) => (
                    <div
                        onClick={() => {
                            navigate(`/news/${article.articleId}`);
                        }}
                    >
                        <ArticleCard
                            key={article.articleId}
                            title={article.articleTitle}
                            date={article.articleDate}
                            img={article.articleImagePath}
                            content={article.articleContent}
                        />
                    </div>
                ))}
            </ScrollLimiter>
        </>
    );
};

export default SubCard;

// 모달 스타일
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

const ModalTitle = styled.h2`
    margin-bottom: 16px;
    font-size: 20px;
`;

const ModalInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const ModalButtonGroup = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
`;

const ModalButton = styled.button<{ cancel?: boolean }>`
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${({ cancel }) => (cancel ? "#ccc" : "#38a169")};
    color: #fff;

    &:hover {
        background-color: ${({ cancel }) => (cancel ? "#b3b3b3" : "#2f855a")};
    }

    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }
`;
