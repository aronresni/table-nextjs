"use client";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();

  return (
    <div className="flex justify-center m-10">
      <ul>
        {users.map((user) => (
          <li
            className="flex"
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <div className="">
              <h5>
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p>Email: {user.email}</p>
            </div>
            <div>
            <img src={user.avatar} className="border border-solid border-violet-900 rounded-full"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;