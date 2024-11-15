import styled from "@emotion/styled";

export const BannerWrapper = styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color: #f8f9fb;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: 100%;
`;

export const BannerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const Title = styled.h2`
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin: 0;

    span {
        color: var(--color-secondary);
    }
`;

export const Underline = styled.div`
    width: 50%;
    height: 4px;
    background: linear-gradient(90deg, #6200ea, #3e85f0);
    border-radius: 2px;
    margin-top: 8px;
`;

export const SlideContent = styled.div`
    padding: 20px;
    text-align: left;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ArticleTitle = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;
`;
