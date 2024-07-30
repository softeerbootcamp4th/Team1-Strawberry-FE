import Header from "./components/header";
import Footer from "./components/footer";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Modal } from "../pages/common/components/modal/Modal";

function DefaultLayout() {
  return (
    <>
      <PageWrapper>
        <Modal />
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </PageWrapper>
    </>
  );
}

export default DefaultLayout;

const PageWrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;

const ContentWrapper = styled.div`
  padding-top: 70px;
  min-height: calc(100vh - 330px);
`;

const FooterWrapper = styled.div`
  width: 100%;
`;
