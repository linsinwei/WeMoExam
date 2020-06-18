'use strict';

import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'MongoDBConnection',
        useFactory: async (): Promise<mongoose.Connection> => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect('mongodb://root:wemotest123@34.80.159.132:27017/')
        }
    }
]