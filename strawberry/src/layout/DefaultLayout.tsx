import Header from "./components/header";
import Footer from "./components/footer";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <PageWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Outlet />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </PageWrapper>
    </>
  );
}

export default DefaultLayout;

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

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
