import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Catalog } from './components/Catalog/Catalog'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import {SPP} from './pages/SPP/SPP'
import {Search} from './pages/Seacrh/Search'

export function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Catalog />} ></Route>
          <Route path={'/catalog/catalog-elem/:id'} element={<SPP />} />
          <Route path={'/catalog/search'} element={<Search />} /> 
        </Routes>
      </div>   
    <Footer />

    </>
  )
}
