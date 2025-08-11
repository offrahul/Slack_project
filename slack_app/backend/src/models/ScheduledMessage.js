import mongoose, { Document, Schema } from "mongoose";
const scheduledMessageSchema = new Schema({
    channel: { type: String, required: true },
    text: { type: String, required: true },
    postAt: { type: Date, required: true },
});
export default mongoose.model("ScheduledMessage", scheduledMessageSchema);
