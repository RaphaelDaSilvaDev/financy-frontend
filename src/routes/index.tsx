import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import { HeaderLayout } from "../layout/HeaderLayout";
import { CreateGoal } from "../pages/Goal";
import { HomePage } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { User } from "../pages/User";
import { AuthValidation } from "../services/authValidation";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/" element={<HeaderLayout />}>
          <Route
            path="/"
            element={
              <AuthValidation>
                <HomePage />
              </AuthValidation>
            }
          />
          <Route
            path="/user"
            element={
              <AuthValidation>
                <User />
              </AuthValidation>
            }
          />
          <Route
            path="/goal/edit/:id?"
            element={
              <AuthValidation>
                <CreateGoal />
              </AuthValidation>
            }
          />
          <Route
            path="/goal/create"
            element={
              <AuthValidation>
                <CreateGoal />
              </AuthValidation>
            }
          />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}
