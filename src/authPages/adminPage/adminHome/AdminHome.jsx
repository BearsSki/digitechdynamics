import React, { useState } from 'react';
import SidebarAdmin from '../sidebarAdmin/SidebarAdmin';
import ChatRoom from '../../../components/messages/ChatRoom'; // Corrected import path
import ChatSidebar from '../../../components/messages/ChatSidebar'; // Make sure to adjust the path
import './AdminHome.scss';

const AdminHome = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleMessagesClick = () => {
    setShowChat(true);
  };

  const handleSelectChat = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="home">
      <SidebarAdmin onMessagesClick={handleMessagesClick} />
      <div className="homeContainer">
        {showChat && (
          <div className="chat-container">
            <ChatSidebar onSelectChat={handleSelectChat} />
            {selectedUser && <ChatRoom selectedUser={selectedUser} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
