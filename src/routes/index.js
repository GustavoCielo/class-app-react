import { Switch, Route, useLocation } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import RegisterStudent from "../pages/RegisterStudent";
import RegisterTeacher from "../pages/RegisterTeacher";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import Course from "../pages/Course";
import { AnimatePresence } from "framer-motion";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/register/student">
          <RegisterStudent />
        </Route>
        <Route path="/register/teacher">
          <RegisterTeacher />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/course">
          <Course />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
