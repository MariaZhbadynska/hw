import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MessageList.css";
export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/messages`)
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li className="message" key={message.from}>
            <NavLink to={`/inbox/messageList/${message.id}`}>
              <h3>message {message.id}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
