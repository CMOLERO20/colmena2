import { useState } from 'react'
import Home from './pages/Home/Home'
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Packs from './pages/Packs/Packs'
import Clases from './pages/Clases/Clases'
import UserClases from './pages/UserClases/UserClases'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
    return (
      <BrowserRouter>
        <Dashboard></Dashboard>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/packs' element={<Packs/>}></Route>
          <Route path='/clases' element={<Clases/>}></Route>
          <Route path='/clase/:claseId' element={<ItemDetailContainer/>}></Route>
          <Route path='/user-clases' element={<UserClases/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
          
        </Routes>
      </BrowserRouter>
    )
}

export default App
