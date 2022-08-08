import { useState } from 'react'

import './App.css'
import LeftMenu from './Components/LeftMenu'
import RightMenu from './Components/RightMenu'
import SingleTweetCard from './Components/SingleTweetCard'

function App() {
  

  return (
    <div className="App">
     <LeftMenu />

      <main>
        <h2>Home</h2>
        <header>

          <input type="text" />
        </header>
      
      <SingleTweetCard />

      </main>

      <RightMenu />
     
     
    </div>
  )
}

export default App
