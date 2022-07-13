import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://leandrorivera:Lrc2003$@cluster0.y4lwe.mongodb.net/?retryWrites=true&w=majority";
