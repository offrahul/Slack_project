import axios from "axios";

export const sendSlackMessage = async (token: string, channel: string, text: string) => {
  await axios.post("https://slack.com/api/chat.postMessage", {
    channel,
    text
  }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
