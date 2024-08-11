import { DrawingPlayProvider } from "./contexts/drawingPlayContext";
import DrawingPlayPage from "./DrawingPlayPage";

function DrawingPlayWrapper() {
  return (
    <>
      <DrawingPlayProvider>
        <DrawingPlayPage />
      </DrawingPlayProvider>
    </>
  );
}

export default DrawingPlayWrapper;
