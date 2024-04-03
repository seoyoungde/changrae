import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header";
import Main from "./components/main/Main";
import MainPage from "./page/MainPage";
import CRMain from "./components/gnb/CR/CRMain";
import CRMainPage from "./page/CRMainPage";
import MyCar from "./components/gnb/Mycar/MyCar";
import MyCarPage from "./page/MyCarPage";
import Csc from "./components/gnb/Csc/Csc";
import CscPage from "./page/CscPage";
import Partner from "./components/gnb/Partner/Partner";
import PartnerPage from "./page/PartnerPage";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/changrae" element={<MainPage />}></Route>
          <Route path="/mainpage" element={<MainPage />}></Route>
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
