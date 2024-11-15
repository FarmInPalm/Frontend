import { IoHomeOutline, IoCalendarOutline, IoVideocamOutline, IoNewspaperOutline } from "react-icons/io5";

interface NavItemProps {
    path: string;
    label: string;
    icon: React.FC;
}

export const NavItems: NavItemProps[] = [
    { path: "/", label: "홈", icon: IoHomeOutline },
    { path: "/news", label: "뉴스 및 트렌드", icon: IoNewspaperOutline },
    { path: "/monitor", label: "모니터링", icon: IoVideocamOutline },
    { path: "/history/event", label: "히스토리", icon: IoCalendarOutline },
];
