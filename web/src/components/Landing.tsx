import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <>
      <div>
        <h1>Landing</h1>
      </div>
      <div className="register">
        <h4>Sign up here</h4>
        <Link to="/signup">Register</Link>
      </div>
    </>
  )
}
