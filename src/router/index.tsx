import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from 'components/Nav'
import Home from 'pages/Home'
import LogoSongs from 'pages/LogoSongs'

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logoSongs" element={<LogoSongs />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
