import mongoose, { Document, Schema } from "mongoose";
const tokenSchema = new Schema({
    accessToken: { type: String, required: true },
    teamId: { type: String, required: true },
});
export default mongoose.model("Token", tokenSchema);
