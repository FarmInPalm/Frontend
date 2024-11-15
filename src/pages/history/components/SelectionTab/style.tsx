import styled from "@emotion/styled";

export const SelectionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const SelectionBox = styled.div<{ isActive: boolean }>`
    padding-bottom: 10px;
    width: 200px;
    border-bottom: 2px black solid;
    display: flex;
    justify-content: center;
    ${(props) =>
        props.isActive &&
        `
            font-weight: bold;
            color: #12b76a;
            border-bottom: 2px #12b76a solid;
        `}
`;
