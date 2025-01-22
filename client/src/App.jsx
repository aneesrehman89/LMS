import React from "react";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./pages/student/Courses";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses/>
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
