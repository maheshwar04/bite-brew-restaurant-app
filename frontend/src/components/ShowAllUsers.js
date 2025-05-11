import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowAllUsers() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [editUser, setEditUser] = useState(null);
  const [formError, setFormError] = useState(null);

  // Fetch Users on Component Mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/all");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editUser) {
      setEditUser({ ...editUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  // Handle Add New User
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      if (!newUser.name || !newUser.email || !newUser.password) {
        setFormError("All fields are required");
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        newUser
      );
      setUsers([...users, response.data]); // Add new user to state
      setNewUser({ name: "", email: "", password: "" }); // Clear form
      setFormError(null); // Clear error message
    } catch (error) {
      setFormError("Error adding user: " + error.message);
    }
  };

  // Handle Delete User
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(users.filter((user) => user._id !== id)); // Remove deleted user from state
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      if (!editUser.name || !editUser.email) {
        setFormError("All fields are required");
        return;
      }
      const response = await axios.put(
        `http://localhost:5000/api/users/${editUser._id}`,
        editUser,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const updatedUsers = users.map((user) =>
        user._id === editUser._id ? { ...user, ...editUser } : user
      );
      setUsers(updatedUsers);
      setEditUser(null);
      setFormError(null);
    } catch (error) {
      setFormError("Error updating user: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Users Management</h2>

      {/* Form for Add or Edit User */}
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h4 className="card-title">
            {editUser ? "Update User" : "Add New User"}
          </h4>
        </div>
        <div className="card-body">
          <form onSubmit={editUser ? handleUpdateUser : handleAddUser}>
            {formError && <div className="alert alert-danger">{formError}</div>}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={editUser ? editUser.name : newUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={editUser ? editUser.email : newUser.email}
                onChange={handleInputChange}
              />
            </div>
            {!editUser && (
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary mt-3">
              {editUser ? "Update" : "Add"} User
            </button>
          </form>
        </div>
      </div>

      {/* Users Table */}
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4 className="card-title">Users List</h4>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => setEditUser(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No users available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowAllUsers;
