
import { useState } from 'react'
import './App.css'
import Navabr from './components/Navabr'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'

function App() {
//  const [ isSignedIn, setIsSignedIn ] = useState(false)
//  const toggleSignedIn = () => {
//   setIsSignedIn(!isSignedIn)
//  }

  // return (
  //   <>
  //     <Navabr isSignedIn={isSignedIn} />
  //     <LoginPage isSignedIn={isSignedIn} toggleSignedIn={toggleSignedIn} />
  //   </>
  // )

  return (
    <AuthProvider>
      <Navabr />
      <LoginPage />
    </AuthProvider>
  )
}

export default App
