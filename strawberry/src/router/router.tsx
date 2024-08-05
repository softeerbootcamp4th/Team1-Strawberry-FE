import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import HeaderLayout from "../layout/HeaderLayout";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import QuizLandingPage from "../pages/quizLanding/QuizLandingPage";
import QuizPlayPage from "../pages/quiz/QuizPlayPage";
import DrawingPlayPage from "../pages/drawing/DrawingPlayPage";
import DrawingLandingPage from "../pages/drawingLanding/DrawingLandingPage";
import LoginPage from "../pages/login/LoginPage";
import LoginRedirectedPage from "../pages/login/LoginRedirectPage";

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
        element: <>{/* <LandingPage /> */}</>,
      },
      {
        path: "introduce",
        element: <>{/* <NewCarPage /> */}</>,
      },
      {
        path: "expectation",
        element: <>{/* <ExpectationPage />, */}</>,
      },
      {
        path: "quiz",
        element: <QuizLandingPage />,
      },
      {
        path: "drawing",
        element: <DrawingLandingPage />,
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
            <DrawingPlayPage />
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
