import mongoose, { Document } from "mongoose";
export interface IToken extends Document {
    accessToken: string;
    teamId: string;
}
declare const _default: mongoose.Model<IToken, {}, {}, {}, mongoose.Document<unknown, {}, IToken, {}, {}> & IToken & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
