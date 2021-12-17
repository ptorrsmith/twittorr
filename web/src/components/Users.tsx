import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'

const USERS_QUERY = gql`
query USERS_QUERY {
  users {
    id
    name
    email
  }
}
`

interface User {
  id: string;
  name: string;
  email: string;
}

export default function Users() {

  const { loading, error, data } = useQuery(USERS_QUERY)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :( "{error.message}"</p>

  return (
    <>
			<div className="nav">
				<Link to="/">Home</Link> | <Link to="/logout">Logout</Link>
			</div>
      <div className="users">
        <h3>All Users</h3>
        {data.users.map((user: User) => (
          <div key={user.id}>
            <h5>{user.name}</h5>
            <div>{user.email}</div>
          </div>
            )
          )
        }
      </div>
      <div className="register">
        <h4>Home</h4>
        <Link to="/">Home</Link>
     </div>
     <div className="register">
        <h4>Had enough?</h4>
        <Link to="/signup">Log out</Link>
     </div>
    </>
  );
}