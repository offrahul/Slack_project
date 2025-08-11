import mongoose, { Document } from "mongoose";
export interface IScheduledMessage extends Document {
    channel: string;
    text: string;
    postAt: Date;
}
declare const _default: mongoose.Model<IScheduledMessage, {}, {}, {}, mongoose.Document<unknown, {}, IScheduledMessage, {}, {}> & IScheduledMessage & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
