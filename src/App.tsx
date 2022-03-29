import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./config";
import UserLogin from "./layouts/UserLogin";
import { AuthPage, DaftarRajal, HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="login" element={<AuthPage />}></Route>
      <Route element={<UserLogin />}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/daftar-rajal"
          element={
            <RequireAuth>
              <DaftarRajal />
            </RequireAuth>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  return isAuthenticated() === true ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}

export default App;
