import React from 'react';

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;

}

export default function IndexPage() {
  const users = await fetchUsers();
  return (

    <>
      <h1>Index Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <h4>{user.id}</h4>
              <p>{user.email}</p>
            </div>
            <img src={user.avatar} alt={user.email} />
          </li>
        ))}
      </ul>
    </>
  );
}