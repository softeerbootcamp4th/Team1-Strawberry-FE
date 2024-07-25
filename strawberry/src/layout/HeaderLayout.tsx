import { ReactNode } from "react";
import Header from "./components/header";
import styled from "styled-components";

interface HeaderLayoutProps {
  children?: ReactNode;
}

function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <>
      <PageWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        {children}
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
