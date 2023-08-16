import express from 'express';
import authenticateJwt from "../middleware/index";
import {SECRET} from '../config';
import jwt, { VerifyCallback, Secret } from 'jsonwebtoken';
import {User} from "../db/index";
import {z} from "zod";

const router = express.Router();

let authInputProps = z.object({
  username : z.string().min(6).max(60),
  password : z.string().min(6).max(30)
})

  router.post('/signup', async (req, res) => {
    const parsedInput = authInputProps.safeParse(req.body);
    //const { username, password } = req.body;
    if(!parsedInput.success){
      return res.status(411).json({
        msg : parsedInput.error
      })
    }
    let username = parsedInput.data.username;
    let password = parsedInput.data.password;

    const user = await User.findOne({ username });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, SECRET as Secret, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });
  
  router.post('/login', async (req, res) => {
    const parsedInput = authInputProps.safeParse(req.body);
    //const { username, password } = req.body;
    if(!parsedInput.success){
      return res.status(411).json({
        msg : parsedInput.error
      })
    }
    let username = parsedInput.data.username;
    let password = parsedInput.data.password;
    
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ id: user._id }, SECRET as Secret, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

    router.get('/me', authenticateJwt, async (req, res) => {
      const userId = req.headers["userId"];
      const user = await User.findOne({ _id: userId });
      if (user) {
        res.json({ username: user.username });
      } else {
        res.status(403).json({ message: 'User not logged in' });
      }
    });

  export default router;
