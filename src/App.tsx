
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { Props } from './Components/SingleTweetCard'
import UserProfile from './Pages/UserProfile'
import SingleTweetMenu from './Components/SingleTweetMenu'




function App() {
  

  return (
    <div className="App">
     
     <Routes>
            <Route index element={<Navigate replace to='/home' />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/singleTweet" element={<SingleTweetMenu/>} /> */}
            <Route path="/user" element={<UserProfile />} />
        </Routes>
     
    </div>
  )
}

export default App
