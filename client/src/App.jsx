import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./containers/LoginPage/LoginPage";
import StartPage from "./containers/StartPage/StartPage";
import WithAuth from "./HOC/WithAuth";
import { userCheckAuth } from "./store/actions/userActions";
import Header from "./components/Header/Header";
import SideBar from "./components/common/SIdeBar/SideBar";
import BatchPage from "./containers/BatchPage/BatchPage";
import NotesPage from "./containers/NotesPage/NotesPage";
import RemindsPage from "./containers/RemindsPage";
import RegistrationPage from "./containers/RegistrationPage/RegistrationPage";
import AdminPage from "./containers/AdminPage/AdminPage";
import WithAccess from "./HOC/WithAccess";
import NoAccessPage from "./containers/FallbackPages/NoAccessPage";
import { roles } from "./const/consts";
import { Box } from "@mui/material";
import { getUserData } from "./store/selectors/userSelector";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userCheckAuth());
    }
  }, []);

  const user = useSelector(getUserData);
  const NotesPageWithAuth = WithAuth(NotesPage, LoginPage);
  const BatchPageWithAuth = WithAuth(BatchPage, LoginPage);
  const RemindsPageWithAuth = WithAuth(RemindsPage, LoginPage);
  const AdminsPageWithAccess = WithAccess(AdminPage, NoAccessPage);
  return (
    <div className="App">
      <Header name={user.name ? user.name : ""} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Routes>
          <Route path="/home" element={<StartPage testProps="test" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/batch" element={<BatchPageWithAuth />} />
          <Route path="/notes" element={<NotesPageWithAuth />} />
          <Route path="/reminds" element={<RemindsPageWithAuth />} />
          <Route
            path="/admin"
            element={
              <AdminsPageWithAccess accessRole={roles.adminRole.ROLE_NAME} />
            }
          />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
