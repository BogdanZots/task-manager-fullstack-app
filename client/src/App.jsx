import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userCheckAuth());
    }
  }, []);
  const NotesPageWithAuth = WithAuth(NotesPage, LoginPage);
  const BatchPageWithAuth = WithAuth(BatchPage, LoginPage);
  const RemindsPageWithAuth = WithAuth(RemindsPage, LoginPage);
  return (
    <div className='App'>
      <Header />
      <SideBar />
      <Routes>
        <Route path='/home' element={<StartPage testProps='test' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/batch' element={<BatchPageWithAuth />} />
        <Route path='/notes' element={<NotesPageWithAuth />} />
        <Route path='/reminds' element={<RemindsPageWithAuth />} />
      </Routes>
    </div>
  );
}

export default App;
