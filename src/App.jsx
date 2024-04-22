import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Frontpage from "./pages/Frontpage"
import Aboutpage from './pages/Aboutpage'

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='/home' element={<Frontpage/>}></Route>
        <Route path='/about' element={<Aboutpage/>}></Route>
      </Routes>
    </Router>
  )
}

App.propTypes = {

}

export default App

