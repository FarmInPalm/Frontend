import styled from "@emotion/styled";

export const EventItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const ItemTitle = styled.div`
    font-size: 20px;
`;

export const ItemDescriptor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
