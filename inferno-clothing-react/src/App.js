import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Header2 from "./components/Header2"

function App() {
  return (
    <div>
        <Header2/>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
