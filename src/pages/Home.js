// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { googleLogout } from '@react-oauth/google'

// export default function Home() {
//   const navigate = useNavigate()
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user')
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     } else {
//       navigate('/')
//     }
//   }, [navigate])

//   const handleLogout = () => {
//     googleLogout()
//     localStorage.removeItem('user')
//     navigate('/')
//   }

//   if (!user) {
//     return null
//   }

//   return (
//     <div className="home-container">
//       <div className="home-card">
//         <svg className="microsoft-logo" viewBox="0 0 21 21">
//           <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
//           <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
//           <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
//           <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
//         </svg>

//         <div className="user-profile">
//           <img
//             src={user.picture}
//             alt={user.name}
//             className="user-avatar"
//           />
//           <h1 className="welcome-text">Welcome, {user.name}!</h1>
//           <p className="user-email">{user.email}</p>
//         </div>

//         <p className="success-message">You have successfully signed in with Google.</p>

//         <button className="sign-out-btn" onClick={handleLogout}>
//           Sign out
//         </button>
//       </div>
//     </div>
//   )
// }
