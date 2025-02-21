"use client"
import React, { useState, useEffect } from 'react';
import styles from "@/app/ui/dashboard/admin/admin.module.css";

const SuperAdminPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate API call with mock data
  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      //  would be an API call
      const mockUsers = [
        { id: 1, name: "John Doe", email: "john@example.com", isAdmin: false },
        { id: 2, name: "Jane Smith", email: "jane@example.com", isAdmin: true },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", isAdmin: false },
      ];
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUsers(mockUsers);
      setError(null);
    } catch (err) {
      setError('Failed to load users. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleAdmin = async (userId) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isAdmin: !user.isAdmin } : user
      ));
    } catch (err) {
      alert('Failed to update admin status. Please try again.');
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.superAdminContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Manage Admin Privileges</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </header>

      {isLoading ? (
        <div className={styles.loading}>Loading users...</div>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.userTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Admin Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="4" className={styles.noResults}>
                    No users found matching your search
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`${styles.adminStatus} ${user.isAdmin ? styles.active : styles.inactive}`}>
                        {user.isAdmin ? 'Admin' : 'Regular User'}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => handleToggleAdmin(user.id)}
                        className={`${styles.toggleAdminButton} ${user.isAdmin ? styles.revoke : styles.grant}`}
                        aria-label={`${user.isAdmin ? 'Revoke' : 'Grant'} admin privileges for ${user.name}`}
                      >
                        {user.isAdmin ? 'Revoke Admin' : 'Grant Admin'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SuperAdminPage;