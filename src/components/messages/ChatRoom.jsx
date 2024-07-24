import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, where, orderBy, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import './ChatRoom.scss';

const ChatRoom = ({ selectedUser }) => {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
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
    if (!user || !selectedUser) return;

    const fetchMessages = async () => {
      try {
        const q = query(
          collection(db, 'messages'),
          where('participants', 'array-contains', user.uid),
          orderBy('createdAt', 'asc')
        );
        const querySnapshot = await getDocs(q);
        const fetchedMessages = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const filteredMessages = fetchedMessages.filter((msg) => msg.participants.includes(selectedUser.id));
        setMessages(filteredMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [user, selectedUser]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        createdAt: serverTimestamp(),
        uid: user.uid,
        participants: [user.uid, selectedUser.id],
        photoURL: user.photoURL || null,
      });
      setNewMessage('');
      fetchMessages();  // Fetch messages after sending a new one
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      const q = query(
        collection(db, 'messages'),
        where('participants', 'array-contains', user.uid),
        orderBy('createdAt', 'asc')
      );
      const querySnapshot = await getDocs(q);
      const fetchedMessages = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const filteredMessages = fetchedMessages.filter((msg) => msg.participants.includes(selectedUser.id));
      setMessages(filteredMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className="chat-room">
      <div className="chat-header">Chatting with {selectedUser.displayName}</div>
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.uid === user.uid ? 'sent' : 'received'}`}>
            {msg.photoURL && <img src={msg.photoURL} alt="Avatar" />}
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      {userRole === 'admin' || (userRole === 'client' && selectedUser.roles === 'admin') ? (
        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="say something nice"
          />
          <button type="submit">🕊️</button>
        </form>
      ) : (
        <div className="message-restriction">You can only message admins.</div>
      )}
    </div>
  );
};

export default ChatRoom;
