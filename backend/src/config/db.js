import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;
// create a SQL connection using our env variables
export const sql = neon(DATABASE_URL);

// This SQL function we export is used as a tagged template literal, which alllows us to write SQL quries safely
