import { Route, Routes } from "react-router-dom";

import FarmDetailPage from "@/pages/farm";
import HistoryPage from "@/pages/history";
import EventPanel from "@/pages/history/components/Panels/EventPanel";
import StockPanel from "@/pages/history/components/Panels/StockPanel";
import MainPage from "@/pages/main";
import MonitoringPage from "@/pages/monitor";
import NewsPage from "@/pages/news";

import { LoginForm, RegisterForm, GoToLoginForm } from "./components/feature/login";
import NewsDetailPage from "./pages/news/components/News";
import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/monitor" element={<MonitoringPage />}></Route>
                <Route path="/monitor/:farmId" element={<FarmDetailPage />} />
                <Route path="/news" element={<NewsPage />}></Route>
                <Route path="/news/:articleId" element={<NewsDetailPage />} />
                <Route path="/history" element={<HistoryPage />}>
                    <Route path="event" element={<EventPanel />}></Route>
                    <Route path="stock" element={<StockPanel />}></Route>
                </Route>
                <Route path="/register" element={<RegisterForm />}></Route>
                <Route path="/login" element={<LoginForm />}></Route>
                <Route path="/gotologin" element={<GoToLoginForm />}></Route>
            </Route>
        </Routes>
    );
};
