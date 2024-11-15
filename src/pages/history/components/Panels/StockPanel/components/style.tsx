import styled from "@emotion/styled";

export const CloseButton = styled.div`
    font-size: 15px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
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

export const StockItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

export const ItemDescriptor = styled.div`
    font-size: 14px;
    color: #666;
`;
