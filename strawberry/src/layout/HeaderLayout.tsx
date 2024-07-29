import Header from "./components/header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <>
      <PageWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Outlet />
      </PageWrapper>
    </>
  );
}

export default HeaderLayout;

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;
