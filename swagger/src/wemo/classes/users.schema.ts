import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema(
    {
        UserName: String,
        Password: String
    },
    { collection: 'WemoUser', versionKey: false },
)