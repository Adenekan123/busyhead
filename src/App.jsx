import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import useAuth from "./hooks/useAuth";

//Components
import Login from "./components/Login";
import Register from "./components/Register";
import Aside from "./components/Aside";
import Header from "./components/Header";
import { Main } from "./components/Main/Main.styles";
import Todos from "./components/Todos";
import NewTask from "./components/NewTask";
import ViewTask from "./components/ViewTask";
import Drafts from "./components/Drafts";
import Archives from "./components/Archive";
import Recycles from "./components/Recycles";
import Reminders from "./components/Reminder";

import PrivateRoute from "./PrivateRoute";

function App() {
  const [count, setCount] = useState(0);
  const { isAuth, setIsAuth } = useAuth();

  return (
    <div style={{ display: "flex" }}>
      <Router>
        {isAuth && <Aside />}

        <Main>
          {isAuth && <Header isAuth={isAuth} setIsAuth={setIsAuth} />}
          <div className="content">
            <Routes>
              <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
              <Route path="/adduser" element={<Register />} />

              <Route
                path="/"
                element={
                  <PrivateRoute isAuth={isAuth} Component={Todos} />
                }></Route>
              <Route
                path="/drafts"
                element={<PrivateRoute isAuth={isAuth} Component={Drafts} />}>
                <Route element={<Drafts />} />
              </Route>
              <Route
                path="/archives"
                element={<PrivateRoute isAuth={isAuth} Component={Archives} />}>
                <Route element={<Archives />} />
              </Route>
              <Route
                path="/recycles"
                element={<PrivateRoute isAuth={isAuth} Component={Recycles} />}>
                <Route element={<Recycles />} />
              </Route>
              <Route
                path="/reminders"
                element={
                  <PrivateRoute isAuth={isAuth} Component={Reminders} />
                }>
                <Route element={<Reminders />} />
              </Route>
              <Route
                path="/newtask"
                element={<PrivateRoute isAuth={isAuth} Component={NewTask} />}>
                <Route element={<NewTask />} />
              </Route>
              <Route
                path="/viewtask/:document/:docid/:id"
                element={<PrivateRoute isAuth={isAuth} Component={ViewTask} />}>
                <Route element={<ViewTask />} />
              </Route>
            </Routes>
          </div>
        </Main>
      </Router>
    </div>
  );
}

export default App;
