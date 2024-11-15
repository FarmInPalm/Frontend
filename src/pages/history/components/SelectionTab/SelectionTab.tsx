import { useNavigate } from "react-router-dom";

import { SelectionWrapper, SelectionBox } from "./style";

export const SelectionTab = () => {
    const navigate = useNavigate();

    return (
        <SelectionWrapper>
            <SelectionBox
                key={"/history/event"}
                isActive={location.pathname === "/history/event"}
                onClick={() => navigate("/history/event")}
            >
                이벤트
            </SelectionBox>
            <SelectionBox
                key={"/history/stock"}
                isActive={location.pathname === "/history/stock"}
                onClick={() => navigate("/history/stock")}
            >
                재고관리
            </SelectionBox>
        </SelectionWrapper>
    );
};
