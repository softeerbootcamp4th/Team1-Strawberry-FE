import { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import styled from "styled-components";

interface DefaultLayoutProps {
  children?: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <PageWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        {children}
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
