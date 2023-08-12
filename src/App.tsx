import React, { useState, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import "./App.css";
import Search from "./pages/Search";
import { store } from "./providers";
import BlockerModal from "./components/Modal/BlockerModal";

function App() {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    const dateTest = new Date("2023-08-12T01:11:10+07:00");
    const isTest = true;
    const hours = (isTest ? dateTest : currentTime)
      .getHours()
      .toString()
      .padStart(2, "0");

    setIsBlocked(Number(hours) < 6 || Number(hours) > 23);

  }, []);

  return (
    <ReduxProvider store={store}>
      <BlockerModal isShowModal={isBlocked} />
      <Search isBlocked={isBlocked} />
    </ReduxProvider>
  );
}

export default App;
