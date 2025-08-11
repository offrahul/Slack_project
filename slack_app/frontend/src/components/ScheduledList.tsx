import React from "react";

interface ScheduledMessage {
  _id: string;
  channel: string;
  text: string;
  postAt: string;
}

interface Props {
  scheduledMessages: ScheduledMessage[];
}

export default function ScheduledList({ scheduledMessages }: Props) {
  return (
    <div>
      <h3>Scheduled Messages</h3>
      {scheduledMessages.length === 0 ? (
        <p>No scheduled messages</p>
      ) : (
        <ul>
          {scheduledMessages.map(({ _id, channel, text, postAt }) => (
            <li key={_id}>
              <b>Channel:</b> {channel} <br />
              <b>Message:</b> {text} <br />
              <b>Post At:</b> {new Date(postAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
