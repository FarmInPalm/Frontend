import styled from "@emotion/styled";

interface AddFarmButtonProps {
    onClick: () => void;
}

const AddMonitoringFarmButton: React.FC<AddFarmButtonProps> = ({ onClick }) => {
    return <AddButton onClick={onClick}>+ 모니터링 농장 추가하기</AddButton>;
};

export default AddMonitoringFarmButton;

const AddButton = styled.button`
    background-color: #e0e0e0;
    border: none;
    border-radius: 12px;
    padding: 12px 0;
    width: 70%;
    height: 40px;
    font-size: 16px;
    color: #757575;
    font-weight: bold;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #d5d5d5;
    }
`;
