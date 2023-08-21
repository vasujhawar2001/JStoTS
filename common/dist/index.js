"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authInputProps = void 0;
const zod_1 = require("zod");
exports.authInputProps = zod_1.z.object({
    username: zod_1.z.string().min(6).max(60),
    password: zod_1.z.string().min(6).max(30)
});
