import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React is Important!</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
