import wemoUserService from '../../Service/wemoUserService';
import UserModel from '../../Domain/UserModel';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post(async (req, res) => {
  const registerModel = new UserModel(req.body)   
  if (await wemoUserService.Register(registerModel)){
    res.json({"Success": true})
  }
  else{
    res.json({"Success": false})
  }
})

export default handler
