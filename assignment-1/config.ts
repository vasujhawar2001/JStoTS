import dotenv from 'dotenv';
dotenv.config();

export const MONGO_LINK = process.env.MONGO_LINK;
export const SECRET= process.env.SECRET;
export const PORT = process.env.PORT;

// export default{
//   MONGO_LINK,
//   SECRET,
//   PORT
// };
