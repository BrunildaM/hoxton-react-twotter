
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'




function App() {
  

  return (
    <div className="App">
     
     <Routes>
            <Route index element={<Navigate replace to='/home' />} />
            <Route path="/home" element={<Home />} />
        </Routes>
     
    </div>
  )
}

export default App
