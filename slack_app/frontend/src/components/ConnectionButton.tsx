import React from "react";

const clientId = "YOUR_SLACK_CLIENT_ID"; 
const redirectUri = encodeURIComponent("YOUR_REDIRECT_URI"); 

const slackAuthUrl = `https://slack.com/oauth/v2/authorize?client_id=${clientId}&scope=chat:write&redirect_uri=${redirectUri}`;

export default function ConnectButton() {
  return (
    <a href={slackAuthUrl} target="_blank" rel="noopener noreferrer">
      <button>Connect Slack</button>
    </a>
  );
}
