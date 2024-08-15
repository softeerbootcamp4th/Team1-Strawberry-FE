import Header from "./components/header";
import React from "react";
import { Wrapper } from "../core/design_system";
import { Modal } from "../pages/common/components/modal/Modal";
import Toast from "../pages/common/components/toast/Toast";

interface HeaderLayoutProps {
  children?: React.ReactNode;
}

function HeaderLayout({ children }: HeaderLayoutProps) {
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
        <Toast />
        {/* HeaderWrapper */}
        <Wrapper width="100%" height="70px" $position="fixed" $top="0">
          <Header />
        </Wrapper>
        {/* PageWrapper */}
        <Wrapper $padding="70px 0 0 0" width="100%">
          {children}
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default HeaderLayout;
