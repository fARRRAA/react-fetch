import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Catalog } from './pages/Catalog/Catalog'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import {SPP} from './pages/SPP/SPP'
import {Search} from './pages/Seacrh/Search'
import { About } from "./pages/About/About"
import { Home } from "./pages/Home/Home"

export function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} ></Route>
          <Route path='/about' element={<About />} />
          <Route path={'/catalog/catalog-elem/:id'} element={<SPP />} />
          <Route path={'/catalog/search'} element={<Search />} /> 
        </Routes>
      </div>   
    <Footer />

    </>
  )
}
