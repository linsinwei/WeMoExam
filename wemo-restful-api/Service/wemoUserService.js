import wemoUserRepository from '../Persistent/wemoUserRepository';
import nextConnect from 'next-connect';

class WemoUserService{
    async Register(user){
        var userDoc = await wemoUserRepository.FindByUserName(user.UserName);
        if (userDoc !== null){
            return false;
        }
        else{
            return await wemoUserRepository.Add(user);
        }    
    }

    async Login(userName, password){
        var userDoc = await wemoUserRepository.FindByUserName(userName);
        if (userDoc === null){
            return false;
        }
        else if(userDoc.Password === password){
            return true;
        } 
        return false;
    }
}

const wemoUserService = new WemoUserService()
export default wemoUserService