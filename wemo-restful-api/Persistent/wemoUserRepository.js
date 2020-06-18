import { MongoClient } from 'mongodb';

class WemoUserRepository{
    constructor(){
        this.client = new MongoClient('mongodb://root:wemotest123@34.80.159.132:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        if (!this.client.isConnected()) 
            this.client.connect();
        this.db = this.client.db('WeMoTest');       
    } 

    async Add(user){
        return await this.db.collection('WemoUser').insertOne(user);
    }
    
    async FindByUserName(userName){   
        return await this.db.collection('WemoUser').findOne({UserName: userName});
    }
}

const wemoUserRepository = new WemoUserRepository()
export default wemoUserRepository







