import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import DefaultLayout from "../layout/DefaultLayout";
import HeaderLayout from "../layout/HeaderLayout";
import LoginRedirectedPage from "../pages/login/LoginRedirectPage";
import SharedRedirectedPage from "../pages/shared/SharedRedirectedPage";

// Dynamically import pages
const QuizPlayWrapper = React.lazy(
  () => import("../pages/quizPlay/QuizPlayWrapper"),
);
const ExpectationPageWrapper = React.lazy(
  () => import("../pages/expectation/ExpectationPageWrapper"),
);
const QuizLandingWrapper = React.lazy(
  () => import("../pages/quizLanding/QuizLandingWrapper"),
);
const DrawingLandingWrapper = React.lazy(
  () => import("../pages/drawingLanding/DrawingLandingWrapper"),
);
const DrawingPlayWrapper = React.lazy(
  () => import("../pages/drawingPlay/DrawingPlayWrapper"),
);
const LandingPage = React.lazy(() => import("../pages/landing/LandingPage"));
const LoginPage = React.lazy(() => import("../pages/login/LoginPage"));
const NewCarPageWrapper = React.lazy(
  () => import("../pages/newCar/NewCarPageWrapper"),
);
const NotFound = React.lazy(() => import("../pages/error/NotFound"));

const Loading = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          </Suspense>
        ),
      },
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "expectation",
        element: (
          <Suspense fallback={<Loading />}>
            <ExpectationPageWrapper />
          </Suspense>
        ),
      },
      {
        path: "quiz",
        element: (
          <Suspense fallback={<Loading />}>
            <QuizLandingWrapper />
          </Suspense>
        ),
      },
      {
        path: "drawing",
        element: (
          <Suspense fallback={<Loading />}>
            <DrawingLandingWrapper />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <HeaderLayout>
          <ProtectedRoute />
        </HeaderLayout>
      </Suspense>
    ),
    children: [
      {
        path: "quiz/play/:subEventId/:token",
        element: (
          <Suspense fallback={<Loading />}>
            <QuizPlayWrapper />
          </Suspense>
        ),
      },
      {
        path: "drawing/play/:subEventId",
        element: (
          <Suspense fallback={<Loading />}>
            <DrawingPlayWrapper />
          </Suspense>
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
      <Suspense fallback={<Loading />}>
        <HeaderLayout>
          <NotFound />
        </HeaderLayout>
      </Suspense>
    ),
  },
  {
    path: "introduce",
    element: (
      <Suspense fallback={<Loading />}>
        <HeaderLayout>
          <NewCarPageWrapper />
        </HeaderLayout>
      </Suspense>
    ),
  },
]);

export default router;
