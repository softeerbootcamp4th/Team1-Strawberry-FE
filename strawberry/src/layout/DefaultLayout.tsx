import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../core/design_system";

function DefaultLayout() {
  return (
    <>
      {/* LayoutWrapper */}
      <Wrapper
        $maxwidth="100vw"
        $minheight="100vh"
        display="flex"
        $flexdirection="column"
      >
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
        <Wrapper $padding="70px 0 0 0" width="100%" $backgroundcolor="red">
          <Outlet />
        </Wrapper>
        {/* FooterWrapper */}
        <Wrapper width="100%" height="260px" $backgroundcolor="blue">
          <Footer />
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default DefaultLayout;
