import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../core/design_system";
import { Modal } from "../pages/common/components/modal/Modal";
import useScrollToTop from "../core/hooks/useScrollToTop";

function DefaultLayout() {
  useScrollToTop();

  return (
    <>
      {/* LayoutWrapper */}
      <Wrapper
        $maxwidth="100vw"
        $minheight="100vh"
        display="flex"
        $flexdirection="column"
      >
        <Modal />
        {/* HeaderWrapper */}
        <Wrapper
          $zindex="100"
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
      </Wrapper>
    </>
  );
}

export default DefaultLayout;
