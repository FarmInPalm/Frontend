import styled from "@emotion/styled";

export const BannerWrapper = styled.div`
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 12px;
    background-color: #f0f8ff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    margin: 170px auto;
    max-width: 350px;
    width: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 1.8em;
    color: #333;
    margin-bottom: 10px;
`;

export const WeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    padding: 10px;
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2em;
    color: #555;
    gap: 10px;

    svg {
        font-size: 1.5em;
        color: #ffa726;
    }
`;
