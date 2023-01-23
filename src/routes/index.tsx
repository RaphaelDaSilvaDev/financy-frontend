import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { AuthValidation } from "../services/authValidation";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <AuthValidation>
              <Home />
            </AuthValidation>
          }
        />
      </ReactRoutes>
    </BrowserRouter>
  );
}
