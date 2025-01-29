import { useEffect, useState } from 'react'

function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users') // Automatic na magpo-proxy sa http://localhost:4000/users
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
