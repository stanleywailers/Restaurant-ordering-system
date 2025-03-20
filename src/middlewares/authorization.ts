import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            userId?: JwtPayload['id'];
        }
    }
}

const verifyJWT = (req: Request, res: Response, next: NextFunction): void => {

    let token : any = req.headers["authorization"];
    console.log(token, String(process.env.JWT_SECRET))
    let arr: string[] = [];
    if(!token){
        res.send("Need a token!");
    }else {
        arr =  token.split("Bearer ");
        token = arr[1];
        jwt.verify(token, String(process.env.JWT_SECRET), (err:any, decoded:any) => {
            if (err) {
                return res.status(401).json({ status: "error", code: "unauthorized" });
            }
          
            if (decoded && typeof decoded === "object" && "userId" in decoded) {
                req.userId = (decoded as JwtPayload).userId;
                next();
            } else {
                return res.status(401).json({ status: "error", code: "invalid_token" });
            }
        });
        
    }

};

export { verifyJWT };

