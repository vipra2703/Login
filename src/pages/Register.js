// import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import './Register.css'; // Create this file

export default function Register() {
  return (
    <div className="register-page">
      <header className="auth-header">
        <div className="logo-section">
          <span className="app-logo">AuthSuite</span>
        </div>
        
        <div className="actions-section">
          {/* Show the sign-in and sign-up buttons when the user is signed out */}
          <SignedOut>
            <div className="auth-buttons">
              <SignInButton mode="modal">
                <button className="btn-secondary">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn-primary">Get Started</button>
              </SignUpButton>
            </div>
          </SignedOut>

          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <div className="user-control">
              <span>Manage Account</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </header>

      <main className="register-content">
        <h1>Secure Your Experience</h1>
        <p>Choose your preferred way to manage your profile.</p>
      </main>
    </div>
  )
}