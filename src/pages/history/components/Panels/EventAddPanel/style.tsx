import styled from "@emotion/styled";

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
    align-items: flex-start;
`;

export const AddButton = styled.div`
    font-size: 15px;
    padding: 10px;
    width: 80%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    border-radius: 100px;

    font-weight: bold;
    color: white;
    background-color: #34c759;
`;

export const InputField = styled.input`
    width: 80%;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #ececec;
    border-radius: 25px;
`;

export const TitleText = styled.div`
    font-size: 23px;
    font-weight: bold;
    color: #34c759;
`;

export const FieldText = styled.div`
    font-size: 23px;
    font-weight: bold;
    color: #34c759;
`;
