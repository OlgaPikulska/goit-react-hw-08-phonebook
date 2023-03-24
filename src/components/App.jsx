import { Layout } from "./Layout";
import { Home } from "pages/Home";
import { Phonebook } from "pages/Phonebook";
import { Register } from "pages/Register";
import { SignIn } from "pages/SignIn";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useEffect } from "react";
import { useAuth } from "hooks/useAuth";

import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useAuth();
  console.log("useAuth", isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          //element={<RestrictedRoute component={<Register />} 
          element={<Register />}
        />

        <Route
          path="/login"
          //element={<RestrictedRoute component={<SignIn />} 
          element={<SignIn />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<Phonebook />} redirectTo={'/login'} />}
        //element={<Phonebook />}
        />

      </Route>
    </Routes>
  );
};
