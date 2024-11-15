import { useNavigate } from "react-router-dom";

import { NavItems } from "@/components/feature/navigation/NavItems";
import * as Styles from "@/components/feature/navigation/index.style";

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <Styles.NavWrapper>
            {NavItems.map((item) => (
                <Styles.NavIcon
                    key={item.path}
                    isActive={location.pathname === item.path}
                    onClick={() => navigate(item.path)}
                >
                    <item.icon />
                    <Styles.NavTitle>{item.label}</Styles.NavTitle>
                </Styles.NavIcon>
            ))}
        </Styles.NavWrapper>
    );
};

export default NavigationBar;
