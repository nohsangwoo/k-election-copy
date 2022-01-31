import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from 'components/Nav'
import Home from 'pages/Home'
import LogoSongs from 'pages/LogoSongs'
import PromotionVideo from 'pages/PromotionVideo'
import Request from 'pages/Request'
import Inquiries from 'pages/Inquiries'

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logoSongs" element={<LogoSongs />}></Route>
        <Route path="/promotionVideo" element={<PromotionVideo />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route path="/inquiries" element={<Inquiries />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
