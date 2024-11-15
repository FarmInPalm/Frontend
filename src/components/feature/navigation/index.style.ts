import styled from "@emotion/styled";

export const NavWrapper = styled.footer`
    z-index: 9999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    background-color: #fff;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
`;

export const NavIcon = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    span {
        margin-top: 4px;
        font-size: 12px;
    }

    ${(props) =>
        props.isActive &&
        `
            font-weight: bold;
            color: #12b76a;
        `}
`;

export const NavTitle = styled.span``;
