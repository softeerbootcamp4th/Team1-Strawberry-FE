// import { Wrapper, theme } from "../../core/design_system";
// import { useEffect, useState } from "react";
// import DrawingOnboarding from "./components/DrawingOnboarding";
// import DrawingGame from "./components/DrawingGame";

import DrawingGuide from "./components/guide/DrawingGuide";

// function DrawingPlayPage() {
//   const timeLimit = 7;
//   const [isStarted, setIsStarted] = useState(false);
//   const [stage, setStage] = useState(1);
//   const [tmp, setTmp] = useState(true);

//   function setOnboardingTimeout() {
//     setTimeout(() => {
//       setTmp(!tmp);
//     }, 3000);
//   }

//   function setPlayTimeout() {
//     setTimeout(() => {
//       setTmp(!tmp);
//     }, 7000);
//   }

//   useEffect(() => {
//     setOnboardingTimeout();
//   }, []);

//   return (
//     <>
//       <Wrapper
//         $backgroundcolor={theme.Color.Ivory.ivory500}
//         display="flex"
//         $flexdirection="column"
//         $alignitems="center"
//         $position="relative"
//         $padding="0 0 110px 0"
//         height="calc(100vh - 180px)"
//       >
//         {tmp === true ? (
//           <DrawingOnboarding />
//         ) : (
//           <DrawingGame
//             timeLimit={timeLimit}
//             startTimer={() => {
//               setIsStarted(true);
//               setPlayTimeout();
//             }}
//             isStarted={isStarted}
//           />
//         )}
//       </Wrapper>
//     </>
//   );
// }

// export default DrawingPlayPage;

function DrawingPlayPage() {
  return <DrawingGuide />;
}

export default DrawingPlayPage;
