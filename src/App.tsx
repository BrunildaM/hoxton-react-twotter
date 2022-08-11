
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import UserProfile, { User } from './Pages/UserProfile'
import SingleTweetMenu from './Components/SingleTweetMenu'
import { useState } from 'react'
import { Tweet } from './Components/TweetsList'




function App() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  let tweet= tweets 

  const [users, setUsers] = useState<User[]>([])
  

  return (
    <div className="App">
     
     <Routes>
            <Route index element={<Navigate replace to='/home' />} />
            <Route path="/home" element={<Home tweets={tweets} setTweets={setTweets}/>} />
            <Route path="/singleTweet" element={<SingleTweetMenu tweet= {tweet}/>} />
            <Route path="/user" element={<UserProfile users={users} setUsers= {setUsers} tweets={tweets} setTweets={setTweets}/>} />
        </Routes>
     
    </div>
  )
}

export default App
