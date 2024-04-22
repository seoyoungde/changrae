import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header";

import MainPage from "./page/MainPage";

import CRMainPage from "./page/CRMainPage";

import MyCarPage from "./page/MyCarPage";

import CscPage from "./page/CscPage";

import PartnerPage from "./page/PartnerPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/changrae" element={<MyCarPage />}></Route>
          <Route path="/mainpage" element={<MyCarPage />}></Route>
          <Route path="/crmainpage" element={<CRMainPage />}></Route>
          <Route path="/mycarpage" element={<MyCarPage />}></Route>
          <Route path="/cscpage" element={<CscPage />}></Route>
          <Route path="/partnerpage" element={<PartnerPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
