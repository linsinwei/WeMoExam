import wemoUserService from '../../Service/wemoUserService';
import UserModel from '../../Domain/UserModel';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post(async (req, res) => {
  const loginModel = new UserModel(req.body) 
  if (await wemoUserService.Login(loginModel.UserName, loginModel.Password)){
    res.json({"Success": true})
  }
  else{
    res.json({"Success": false})
  }
})

export default handler
