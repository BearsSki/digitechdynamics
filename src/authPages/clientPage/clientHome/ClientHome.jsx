import React, { useState } from 'react';
import SidebarClient from '../sidebarClient/SidebarClient';
import ChatRoom from '../../../components/messages/ChatRoom'; // Corrected import path
import ChatSidebar from '../../../components/messages/ChatSidebar'; // Make sure to adjust the path
import './ClientHome.scss';

const ClientHome = () => {
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
      <SidebarClient onMessagesClick={handleMessagesClick} />
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

export default ClientHome;
