import styled from "@emotion/styled";

export const Button = styled.div`
    width: 80%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: bold;

    color: white;
    background-color: #34c759;
    border-radius: 500px;
`;

export const StockItemWrapper = styled.div`
    width: 80%;
    height: 60px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #d8f8d3;
    border-radius: 20px;
`;

export const ItemWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
`;

export const ItemTitle = styled.div`
    font-size: 25px;
`;

export const ItemDescriptor = styled.div`
    font-size: 20px;
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
