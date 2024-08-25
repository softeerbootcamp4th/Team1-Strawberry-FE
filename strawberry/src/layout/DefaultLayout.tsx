import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet, useLocation } from "react-router-dom";
import { Wrapper } from "../core/design_system";
import { Modal } from "../pages/common/components/modal/Modal";
import useScrollToTop from "../core/hooks/useScrollToTop";
import styled from "styled-components";

function DefaultLayout() {
  useScrollToTop();
  const location = useLocation();
  const isIntroduce = location.pathname.includes("/introduce");

  return (
    <>
      {/* LayoutWrapper */}
      <LayoutWrapper isIntroduce={isIntroduce}>
        <Modal />
        {/* HeaderWrapper */}
        <Wrapper
          $zindex="10000"
          width="100%"
          $position="fixed"
          height="70px"
          $top="0"
        >
          <Header />
        </Wrapper>
        {/* ContentWrapper */}
        <Wrapper $padding="70px 0 0 0" width="100%">
          <Outlet />
        </Wrapper>
        {/* FooterWrapper */}
        <Wrapper width="100%" height="260px">
          <Footer />
        </Wrapper>
      </LayoutWrapper>
    </>
  );
}

export default DefaultLayout;

const LayoutWrapper = styled.div<{ isIntroduce: boolean }>`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${({ isIntroduce }) =>
    isIntroduce &&
    `
    ::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
  `}
`;
