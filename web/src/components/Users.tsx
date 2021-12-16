import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'

const USERS_QUERY = gql`
query USERS_QUERY {
  users {
    id
    name
  }
}
`

interface User {
  id: string;
  name: string;
}

export default function Users() {

  const { loading, error, data } = useQuery(USERS_QUERY)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :( "{error.message}"</p>

  return (
    <>
      <div className="users">
        <p>Hi</p>
        {data.users.map((user: User) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
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