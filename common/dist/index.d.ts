import { z } from "zod";
export declare const authInputProps: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type authParams = z.infer<typeof authInputProps>;
