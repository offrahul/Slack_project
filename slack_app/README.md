# Slack Connect App

A full-stack application to connect to Slack, send instant messages, or schedule them for later.

---

## 📂 Project Structure

These is the basic Architectural of the slack connect app


slack-app/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── db.ts # MongoDB connection
│ │ ├── models/
│ │ │ ├── Token.ts # Stores access token & team ID
│ │ │ └── ScheduledMessage.ts
│ │ ├── routes/
│ │ │ ├── slack.ts # Slack OAuth and send message routes
│ │ │ └── schedule.ts # Scheduling logic
│ │ └── server.ts # Express app entry point
│ ├── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ConnectButton.jsx
│ │ │ ├── SendNow.jsx
│ │ │ └── ScheduleMessage.jsx
│ │ ├── App.jsx
│ │ └── index.js
│ ├── package.json
│
└── README.md



##  Features

- OAuth 2.0 authentication with Slack
- Store access tokens securely in MongoDB
- Send messages instantly to any Slack channel
- Schedule messages for a specific future time

---

## ⚙️ Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Slack App created at: [https://api.slack.com/apps](https://api.slack.com/apps)



##  Slack App Setup

1. **Create a Slack App**  
   Go to [Slack API - Your Apps](https://api.slack.com/apps) → **Create New App**  "From scratch".

2. **Enable OAuth & Permissions**  
   In your app's settings, go to **OAuth & Permissions**.

3. **Add Bot Token Scopes** (under "Bot Token Scopes"):  
chat:write
channels:read
groups:read




###  Prerequisites
- Node.js v18+
- MongoDB running locally or Atlas
- Slack App created at: [https://api.slack.com/apps](https://api.slack.com/apps)

### Slack App Setup
1. Create a Slack App
2. Enable **OAuth & Permissions**
3. Add scopes:
4. Add Redirect URL:  

5. Install the app to your workspace

###  Backend Setup
```terminal
cd backend
npm install




SLACK_CLIENT_ID=your_client_id
SLACK_CLIENT_SECRET=your_client_secret
SLACK_REDIRECT_URI=your_redirect_uri
MONGO_URI=MongoDB_URL
PORT=your_port


Run backend:
npm run dev
```

###  Frontend Setup
```terminal
cd frontend
npm install

npm start
```

### create .env 
REACT_APP_BACKEND_URL=your URL

###  connection with slack
1.Connect Your Slack
Open frontend in browser

2.Click Connect to Slack button

3.Log in to Slack -> Allow permissions

4.The backend will store your accessToken and teamId in MongoDB


### Send or Schedule Messages

1.Use Send Now to send instantly

2.Use Schedule Message to pick a date & time for later








 

