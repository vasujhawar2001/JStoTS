import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'; // Import the Request and Response types

import {SECRET} from '../config';  

const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
  
    jwt.verify(token, SECRET as Secret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      //req.userId = user.id;
      if(!user || typeof user==="string"){
        return res.sendStatus(403);
      }
       req.headers["userId"] = user.id;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default authenticateJwt;
