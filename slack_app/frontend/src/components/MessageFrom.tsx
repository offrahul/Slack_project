import React, { useState } from "react";
import API from "../api/backend";

interface Props {
  refreshScheduled: () => void;
}

export default function MessageForm({ refreshScheduled }: Props) {
  const [channel, setChannel] = useState("");
  const [text, setText] = useState("");
  const [postAt, setPostAt] = useState("");

  const sendNow = async () => {
    try {
      await API.post("/messages/send", { channel, text });
      alert("Message sent!");
    } catch (error: any) {
      alert("Send failed: " + error?.response?.data?.error || error.message);
    }
  };

  const schedule = async () => {
    try {
      if (!postAt) {
        alert("Please select a date and time to schedule");
        return;
      }
      await API.post("/messages/schedule", { channel, text, postAt });
      alert("Message scheduled!");
      refreshScheduled();
    } catch (error: any) {
      alert("Schedule failed: " + error?.response?.data?.error || error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Channel ID"
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Message Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type="datetime-local"
        value={postAt}
        onChange={(e) => setPostAt(e.target.value)}
      />
      <br />
      <button onClick={sendNow}>Send Now</button>
      <button onClick={schedule}>Schedule</button>
    </div>
  );
}
