import express from "express";
import axios from "axios";
import Token from "../models/Token.js";
const router = express.Router();
router.get("/slack/oauth", async (req, res) => {
    const { code } = req.query;
    const resp = await axios.get("https://slack.com/api/oauth.v2.access", {
        params: {
            client_id: process.env.SLACK_CLIENT_ID,
            client_secret: process.env.SLACK_CLIENT_SECRET,
            code,
        },
    });
    const { access_token, team } = res.data;
    await Token.findOneAndUpdate({ teamId: team.id }, { accessToken: access_token, teamId: team.id }, { upsert: true });
    res.send("Slack Connected ✅");
});
export default router;
