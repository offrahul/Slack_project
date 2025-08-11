import mongoose, { Document, Schema } from "mongoose";

export interface IToken extends Document {
  accessToken: string;
  teamId: string;
}

const tokenSchema = new Schema<IToken>({
  accessToken: { type: String, required: true },
  teamId: { type: String, required: true },
});

export default mongoose.model<IToken>("Token", tokenSchema);
