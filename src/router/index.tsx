import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from 'components/Nav'
import Home from 'pages/Home'
import Hello from 'pages/Hello'
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
