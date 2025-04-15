// import React from 'react'

import { useAuth } from "../context/AuthContext"

// const LoginForm = ({ isSignedIn, toggleSignedIn }) => {
//   return (
//     <div>
//         <h1>Login Form</h1>
//         <button onClick={toggleSignedIn}>
//             { isSignedIn ? "Log Out" :  "LogIn" }
//         </button>    
//     </div>
//   )
// }

// export default LoginForm

// import React from 'react'

const LoginForm = () => {
    const { isSignedIn, toggleSignedIn} = useAuth();
  return (
    <div>
        <h1>Login Form</h1>
        <button onClick={toggleSignedIn}>
            { isSignedIn ? "Log Out" :  "LogIn" }
        </button>    
    </div>
  )
}

export default LoginForm