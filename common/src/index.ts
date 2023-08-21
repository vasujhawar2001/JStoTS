import {z} from "zod";

export const authInputProps = z.object({
    username : z.string().min(6).max(60),
    password : z.string().min(6).max(30)
  })

export type authParams = z.infer<typeof authInputProps>;