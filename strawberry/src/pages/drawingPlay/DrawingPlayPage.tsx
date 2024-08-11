import styled from "styled-components";
import { Wrapper } from "../../core/design_system";

import useDrawingPlayPage from "./hooks/useDrawingPlayPage";

import DrawingOnboarding from "./components/DrawingOnboarding/DrawingOnboarding";
import DrawingGame from "./components/DrawingGame/DrawingGame";
import DrawingResult from "./components/DrawingResult/DrawingResult";
import DrawingFinish from "./components/DrawingFinish/DrawingFinish";

import drawingBG from "/src/assets/images/background/drawingBG.svg";

function DrawingPlayPage() {
  const { status } = useDrawingPlayPage();

  return (
    <PageWrapper>
      <Wrapper
        // 여기에 위와 간격 조절
        $margin="50px 0 0 0"
        $position="relative"
        width="fit-content"
        height="fit-content"
      >
        <BGImage src={drawingBG} />
        {(() => {
          switch (status) {
            case "onBoarding":
              return <DrawingOnboarding />;
            case "game":
              return <DrawingGame />;
            case "result":
              return <DrawingResult />;
            case "finish":
              return <DrawingFinish />;
          }
        })()}
      </Wrapper>
    </PageWrapper>
  );
}

export default DrawingPlayPage;

const BGImage = styled.img`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.Color.Ivory.ivory500};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 0 110px 0;
  height: calc(100vh - 180px);
`;
