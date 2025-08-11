import mongoose, { Document, Schema } from "mongoose";

export interface IScheduledMessage extends Document {
  channel: string;
  text: string;
  postAt: Date;
}

const scheduledMessageSchema = new Schema<IScheduledMessage>({
  channel: { type: String, required: true },
  text: { type: String, required: true },
  postAt: { type: Date, required: true },
});

export default mongoose.model<IScheduledMessage>("ScheduledMessage", scheduledMessageSchema);
