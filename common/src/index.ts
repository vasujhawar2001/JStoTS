import {z} from "zod";

export const signupInput = z.object({
    username : z.string().min(6).max(60),
    password : z.string().min(6).max(30)
  })

export type SignupParams = z.infer<typeof signupInput>;