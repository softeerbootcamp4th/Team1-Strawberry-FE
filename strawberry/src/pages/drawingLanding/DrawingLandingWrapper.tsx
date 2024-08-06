import { DrawingLandingContextProvider } from "./contexts/DrawingLandingContext";

import DrawingLandingPage from "./DrawingLandingPage";

function DrawingLandingWrapper() {
  return (
    <DrawingLandingContextProvider>
      <DrawingLandingPage />
    </DrawingLandingContextProvider>
  );
}

export default DrawingLandingWrapper;
