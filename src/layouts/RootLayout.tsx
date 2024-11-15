import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";

import Header from "@/components/feature/header";
import NavigationBar from "@/components/feature/navigation";

export const RootLayout = () => {
    return (
        <Wrapper>
            <Main>
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <NavigationBar />
            </Main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    min-height: 100vh;
`;

const Main = styled.main`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    min-height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    flex-grow: 1;
    margin: 12px 6px;
`;
