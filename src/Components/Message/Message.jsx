import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Message() {
  const [message, setMessage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/messages/${id}`)
      .then((response) => response.json())
      .then((data) => setMessage(data));
  }, [id]);

  if (!message) return <h2>Message not found</h2>;

  const { from, to, subject, message: messageBody } = message;

  return (
    <span>
      <p>From: {from}</p>
      <br />
      <p>To: {to}</p>
      <p>Subject: {subject}</p>
      <p>{messageBody}</p>
    </ span>
  );
}
