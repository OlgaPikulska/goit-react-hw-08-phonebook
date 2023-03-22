import { Layout } from "./Layout";
import { Home } from "pages/Home";
import { Phonebook } from "pages/Phonebook";
import { Register } from "pages/Register";
import { SignIn } from "pages/SignIn";
import { Routes, Route } from 'react-router-dom';

// import { ProtectedRoute } from "./ProtectedRoute";
// import { RestrictedRoute } from "./RestrictedRoute";

export const App = () => {
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
          //element={<ProtectedRoute component={<Phonebook />} redirectTo={'/sign-in'} 
          element={<Phonebook />}
        />
      </Route>
    </Routes>
  );
};
