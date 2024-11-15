import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
    position: relative;
    width: min(450px, 100%);
    height: 300px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export const LeftArrowWrapper = styled.div`
    position: absolute;

    left: 10px;
    top: 50%;
    transform: translateY(-50%);

    z-index: 10;
`;

export const RightArrowWrapper = styled.div`
    position: absolute;

    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    z-index: 10;
`;

export const SlideContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
`;

export const SlideTitle = styled.h3`
    position: absolute;
    bottom: 15px;
    left: 20px;
    font-size: 1.1em;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    margin: 0;
`;

export const OverlayImage = styled.img`
    opacity: 0.7;
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
