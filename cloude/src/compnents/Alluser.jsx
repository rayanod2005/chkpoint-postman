import React, { useEffect, useState } from 'react';

export default function Alluser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://chkpoint-postman.onrender.com//alluser');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Here you found all users</h1>
            <ul>
                {users.map((user, index) => (
                    <div>
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.password}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

