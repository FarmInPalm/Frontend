import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";

import { SelectionTab } from "./components/SelectionTab/SelectionTab";

const HistoryPage: React.FC = () => {
    return (
        <HistoryWrapper>
            <SelectionTab />
            <Outlet />
        </HistoryWrapper>
    );
};

const HistoryWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export default HistoryPage;
