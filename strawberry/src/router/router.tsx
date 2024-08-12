import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import HeaderLayout from "../layout/HeaderLayout";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import QuizPlayPage from "../pages/quiz/QuizPlayPage";
import DrawingPlayPage from "../pages/drawing/DrawingPlayPage";
import LoginPage from "../pages/login/LoginPage";
import ExpectationPageWrapper from "../pages/expectation/ExpectationPageWrapper";
import LoginRedirectedPage from "../pages/login/LoginRedirectPage";
import QuizLandingWrapper from "../pages/quizLanding/QuizLandingWrapper";
import DrawingLandingWrapper from "../pages/drawingLanding/DrawingLandingWrapper";
import DrawingPlayWrapper from "../pages/drawingPlay/DrawingPlayWrapper";

import LandingPage from "../pages/landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "",
        element: (
          <>
            <LandingPage />
          </>
        ),
      },
      {
        path: "introduce",
        element: <>{/* <NewCarPage /> */}</>,
      },
      {
        path: "expectation",
        element: (
          <>
            <ExpectationPageWrapper />
          </>
        ),
      },
      {
        path: "quiz",
        element: <QuizLandingWrapper />,
      },
      {
        path: "drawing",
        element: <DrawingLandingWrapper />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <HeaderLayout>
          <ProtectedRoute />
        </HeaderLayout>
      </>
    ),
    children: [
      {
        path: "quiz/play",
        element: (
          <>
            <QuizPlayPage />
          </>
        ),
      },
      {
        path: "drawing/play",
        element: (
          <>
            <DrawingPlayWrapper />
          </>
        ),
      },
      {
        path: "drawing/result",
        element: <>{/* <DrawingResultPage /> */}</>,
      },
    ],
  },
  {
    path: "auth/:sns/callback",
    element: (
      <PublicRoute>
        <LoginRedirectedPage /> {/* 리다이렉트 페이지 렌더링 */}
      </PublicRoute>
    ),
  },
]);

export default router;
