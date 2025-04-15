// import React from 'react'

// const Navabr = ({ isSignedIn }) => {
//   return (
//     <div>
//         <span>Navabr</span> - 
//         <span>
//             {
//                 isSignedIn ? "Welcome John" : ""
//             }
//         </span>
//     </div>
//   )
// }

// export default Navabr


import { useAuth } from '../context/AuthContext'

const Navabr = () => {
    const { isSignedIn } = useAuth()
  return (
    <div>
        <span>Navabr</span> - 
        <span>
            {
                isSignedIn ? "Welcome John" : ""
            }
        </span>
    </div>
  )
}

export default Navabr