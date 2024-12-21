import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);

  const handleDelete = (id) => {
    // Delete the user from database
    fetch(`https://coffee-store-server-neon-five.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingUsers = [...users].filter((user) => user._id !== id);
        setUsers(remainingUsers);
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-3 font-semibold">Users: {users.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Creation Date</th>
                <th>Last Login Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt ? user.createdAt : "Record not found!"}</td>
                  <td>{user.lastSignInTime}</td>
                  <td>
                    <div className="flex gap-3">
                      <button className="btn">Update</button>
                      <button className="btn">Edit</button>
                      <button className="btn" onClick={() => handleDelete(user._id)}>
                        X
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
