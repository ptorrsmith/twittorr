import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <>
			<div className="nav">
				<Link to="/signup">Register</Link> | <Link to="/login">Login</Link>
			</div>
      <div>
        <h1>Landing</h1>
      </div>
      <div className="login">
        <h4>Users</h4>
        <Link to="/users">view</Link>
      </div>
    </>
  )
}
