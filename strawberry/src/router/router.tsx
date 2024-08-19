import { createBrowserRouter } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import DefaultLayout from "../layout/DefaultLayout";
import HeaderLayout from "../layout/HeaderLayout";

import QuizPlayWrapper from "../pages/quizPlay/QuizPlayWrapper";
import ExpectationPageWrapper from "../pages/expectation/ExpectationPageWrapper";
import QuizLandingWrapper from "../pages/quizLanding/QuizLandingWrapper";
import DrawingLandingWrapper from "../pages/drawingLanding/DrawingLandingWrapper";
import DrawingPlayWrapper from "../pages/drawingPlay/DrawingPlayWrapper";
import SharedRedirectedPage from "../pages/shared/SharedRedirectedPage";

import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/login/LoginPage";
import LoginRedirectedPage from "../pages/login/LoginRedirectPage";
import NewCarPageWrapper from "../pages/newCar/components/NewCarPageWrapper";

import NotFound from "../pages/common/components/error/NotFound";

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
        element: (
          <>
            <NewCarPageWrapper />
          </>
        ),
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
        path: "quiz/play/:subEventId",
        element: (
          <>
            <QuizPlayWrapper />
          </>
        ),
      },
      {
        path: "drawing/play/:subEventId",
        element: (
          <>
            <DrawingPlayWrapper />
          </>
        ),
      },
    ],
  },
  {
    path: "auth/:sns/callback",
    element: (
      <PublicRoute>
        <LoginRedirectedPage />
      </PublicRoute>
    ),
  },
  {
    path: "shared/:sharedCode",
    element: <SharedRedirectedPage />,
  },
  {
    path: "*",
    element: (
      <HeaderLayout>
        <NotFound />
      </HeaderLayout>
    ),
  },
]);

export default router;
