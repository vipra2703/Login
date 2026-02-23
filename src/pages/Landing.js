import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

export default function Landing() {
  const navigate = useNavigate()

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential)
    // Store user info in localStorage
    localStorage.setItem('user', JSON.stringify({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture
    }))
    navigate('/register')
  }

  const handleError = () => {
    console.log('Login Failed')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <svg className="microsoft-logo" viewBox="0 0 21 21">
          <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
          <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
          <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
          <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
        </svg>

        <h1 className="sign-in-title">Sign in</h1>
        <p className="sign-in-subtitle">to continue to your account</p>

        <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            theme="outline"
            size="large"
            width="100%"
          />
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="other-options">
          <a href="#create" className="option-link">Create account</a>
          <a href="#help" className="option-link">Can't access your account?</a>
        </div>
      </div>
    </div>
  )
}
