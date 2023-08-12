import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./pages/Search";
import BlockerModal from "./components/Modal/BlockerModal";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    const dateTest = new Date("2023-08-12T01:11:10+07:00");
    const isTest = false;

    const hours = (isTest ? dateTest : currentTime)
      .getHours()
      .toString()
      .padStart(2, "0");

    setIsBlocked(Number(hours) < 6 || Number(hours) > 23);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Search isBlocked={isBlocked} />,
    },
    {
      path: "/registration-summary",
      element: <div> registration-summary </div>,
    },
  ]);

  return (
    <>
      <BlockerModal isShowModal={isBlocked} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
