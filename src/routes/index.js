import { Switch, Route, useLocation } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import RegisterStudent from "../pages/RegisterStudent";
import RegisterTeacher from "../pages/RegisterTeacher";

const Routes = () => {
  const location = useLocation();
  return (
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
    </Switch>
  );
};

export default Routes;
