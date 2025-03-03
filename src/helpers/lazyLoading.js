import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/HomePage.jsx" /* webpackChunkName: "home-page" */));

export const NotFoundPage = lazy(() => import("../pages/NotFoundPage.jsx" /* webpackChunkName: "not-found-page" */));

export const CommentsPage = lazy(() => import("../pages/CommentsPage.jsx" /* webpackChunkName: "comments-page" */));

export const MessagesPage = lazy(() => import("../pages/MessagesPage.jsx" /* webpackChunkName: "messages-page" */));

export const AdminPage = lazy(() => import("../pages/AdminPage.jsx" /* webpackChunkName: "admin-page" */));

// export const MainLayout = lazy(() => import("../components/MainLayout/MainLayout.jsx" /* webpackChunkName: "main-layout" */));
