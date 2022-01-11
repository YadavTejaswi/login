import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Login, Registration } from "./component/index";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} ></Route>
          <Route exact path="/welcome" element={< Welcome />}></Route>
          <Route exact path="/Registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Router;
