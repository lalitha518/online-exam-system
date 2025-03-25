import { useState } from 'react'
import './App.css'
import AppRouter from './router/AppRouter'
import Footer from './static/Footer'
import Header from './static/Header'

function App() {

  return (
    <>
    <Header/>
    <AppRouter/>
     <Footer/>
    </>
  )
}

export default App
