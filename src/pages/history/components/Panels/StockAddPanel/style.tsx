import styled from "@emotion/styled";

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

export const PanelWrapper = styled.div`
    width: 90%;
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border: 2px solid grey;
    border-radius: 25px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.div`
    font-size: 15px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`;

export const AddButton = styled.div`
    font-size: 15px;
    padding: 10px;
    width: 110px;
    display: flex;
    justify-content: center;
    border-radius: 100px;
    font-weight: bold;
    color: white;
    background-color: #34c759;
    cursor: pointer;
`;

export const InputField = styled.input`
    width: 80%;
    padding: 10px;
    background-color: #ececec;
    border-radius: 25px;
    border: none;
`;

export const TitleText = styled.div`
    font-size: 23px;
    font-weight: bold;
    color: #34c759;
`;
