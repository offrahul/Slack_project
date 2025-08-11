import cron from "node-cron";
import ScheduledMessage from "../models/ScheduledMessage.js";
import Token from "../models/Token.js";
import { sendSlackMessage } from "../src/utils/slackApi";

export const startScheduler = () => {
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const messages = await ScheduledMessage.find({ postAt: { $lte: now } });
    for (const msg of messages) {
      const tokenDoc = await Token.findOne(); // Single workspace
      if (tokenDoc) {
        await sendSlackMessage(tokenDoc.accessToken, msg.channel, msg.text);
        await msg.deleteOne();
      }
    }
  });
};
