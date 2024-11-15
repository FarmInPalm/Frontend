import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: linear-gradient(180deg, #12b76a, #fff);
`;

export const Logo = styled.img`
    height: 30px;
`;

export const IconWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const NotificationIcon = styled.div`
    position: relative;
    font-size: 24px;
`;

export const NotificationDot = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    background-color: #ff6b6b;
    border-radius: 50%;
`;
