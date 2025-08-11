import express from "express";
import Token from "../models/Token.js";
import ScheduledMessage from "../models/ScheduledMessage.js";
import { sendSlackMessage } from "../utils/slackApi.js";
const router = express.Router();
router.post("/send", async (req, res) => {
    const { channel, text } = req.body;
    const tokenDoc = await Token.findOne();
    if (!tokenDoc)
        return res.status(400).json({ error: "Slack not connected" });
    await sendSlackMessage(tokenDoc.accessToken, channel, text);
    res.json({ success: true });
});
router.post("/schedule", async (req, res) => {
    const { channel, text, postAt } = req.body;
    const msg = new ScheduledMessage({ channel, text, postAt });
    await msg.save();
    res.json(msg);
});
router.get("/scheduled", async (_req, res) => {
    const list = await ScheduledMessage.find();
    res.json(list);
});
export default router;
