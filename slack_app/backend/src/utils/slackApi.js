import axios from "axios";
export const sendSlackMessage = async (token, channel, text) => {
    await axios.post("https://slack.com/api/chat.postMessage", {
        channel,
        text
    }, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
