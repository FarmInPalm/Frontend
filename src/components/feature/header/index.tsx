import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import * as Styles from "@/components/feature/header/index.style";

import FarmInPalm from "@/assets/Logo.png";

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (location.pathname !== "/") {
            navigate("/");
        }
    };

    return (
        <Styles.HeaderWrapper>
            <Styles.Logo src={FarmInPalm} alt="Logo" onClick={handleLogoClick} />
            <Styles.IconWrapper>
                <Styles.NotificationIcon>
                    <IoNotificationsOutline />
                    <Styles.NotificationDot />
                </Styles.NotificationIcon>
            </Styles.IconWrapper>
        </Styles.HeaderWrapper>
    );
};

export default Header;
