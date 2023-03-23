import React, { useState } from 'react'
import Link from 'next/link'

export default function SIgnInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (email.length == 0 || password.length == 0) {
      setError(true)
    }
    console.log(email, password)
  }
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="email-input">
          <div className="form-group">
            <input
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              required
              type="email"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              // title="Ivalid email address"

            />
          </div>
        </div>
        {error && email.length <= 0 ? (
          <label>Email input can not be empty</label>
        ) : (
          ''
        )}

        <div className="password-input">
          <div className="password-field">
            <input
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              type={passwordShown ? 'text' : 'password'}
            />
            <button
              onClick={togglePassword}
              className="btn btn-link"
              type="button"
            >
              Show
            </button>
          </div>
        </div>
        {error && password.length <= 0 ? (
          <label>Password input can not be empty</label>
        ) : (
          ''
        )}
        <div className="forgot-link">
          <Link href="/" className="btn-forget_password">
            forgot password
          </Link>
        </div>
        <div>
          <button className="login-btn">
            <Link href="/dashboard" className="login-link">
              log in
            </Link>
          </button>
        </div>
      </form>
    </>
  )
}
