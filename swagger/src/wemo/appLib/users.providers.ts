'use strict';

import { Connection, connection } from 'mongoose';
import { UsersSchema } from '../classes/users.schema';

export const UsersProvider = [
    {
        provide: 'UsersRepository',
        useFactory: (connection: Connection) => connection.model('WemoUser', UsersSchema),
        inject: ['MongoDBConnection']
    }
]