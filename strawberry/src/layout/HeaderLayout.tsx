import Header from "./components/header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Modal } from "../pages/common/components/modal/Modal";

function HeaderLayout() {
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
      </PageWrapper>
    </>
  );
}

export default HeaderLayout;

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
  min-height: calc(100vh - 70px);
`;
