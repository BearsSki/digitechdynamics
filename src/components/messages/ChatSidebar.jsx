import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import './ChatSidebar.scss';

function ChatSidebar({ onSelectChat }) {
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    if (!user) return;

    const fetchUserRole = async () => {
      const userDoc = await getDocs(query(collection(db, 'users'), where('email', '==', user.email)));
      const userData = userDoc.docs[0].data();
      setUserRole(userData.roles);
    };

    fetchUserRole();
  }, [user]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const q = search
        ? query(usersCollection, where('displayName', '>=', search), where('displayName', '<=', search + '\uf8ff'))
        : query(usersCollection);
      const querySnapshot = await getDocs(q);
      let usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Filter users based on role
      if (userRole === 'client') {
        usersList = usersList.filter(u => u.roles === 'admin');
      }

      setUsers(usersList);
    };

    fetchUsers();
  }, [search, userRole]);

  return (
    <div className="chat-sidebar">
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectChat(user)} className="user-item">
            {user.displayName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatSidebar;
