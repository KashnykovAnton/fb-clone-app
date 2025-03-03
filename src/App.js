import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header/Header.jsx";
import PostCreate from "./components/PostCreate/PostCreate.jsx";
import LoaderSpin from "./components/LoaderSpin/LoaderSpin.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import PostEdit from "./components/PostEdit/PostEdit.jsx";
import { HomePage, CommentsPage, NotFoundPage, MessagesPage, AdminPage } from "./helpers/lazyLoading.js";
import { useFetchInitialProfileData } from "./hooks/useFetchInitialData.js";

function App() {
  useFetchInitialProfileData();
  return (
    <Suspense fallback={<LoaderSpin />}>
      <CssBaseline>
        <Header />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}>
              <Route path="create" element={<PostCreate />} />
              <Route path="view/:postId" element={<PostEdit viewMode={true} />} />
              <Route path="edit/:postId" element={<PostEdit />} />
            </Route>
            <Route path="comments" element={<CommentsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="admin" element={<AdminPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </CssBaseline>
    </Suspense>
  );
}

export default App;
