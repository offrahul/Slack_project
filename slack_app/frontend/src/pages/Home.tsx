import React, { useEffect, useState } from "react";
import MessageForm from "../components/MessageFrom";

import ScheduledList from "../components/ScheduledList";

import ConnectButton from "../components/ConnectionButton";

import API from "../api/backend";

export default function Home() {
  const [scheduledMessages, setScheduledMessages] = useState([]);

  const fetchScheduledMessages = async () => {
    try {
      const res = await API.get("/messages/scheduled");
      setScheduledMessages(res.data);
    } catch (error) {
      console.error("Failed to fetch scheduled messages", error);
    }
  };

  useEffect(() => {
    fetchScheduledMessages();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h1>Slack Connect App</h1>
      <ConnectButton />
      <hr />
      <MessageForm refreshScheduled={fetchScheduledMessages} />
      <hr />
      <ScheduledList scheduledMessages={scheduledMessages} />
    </div>
  );
}
