import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;
// create a SQL connection using our env variables
const sql = neon(DATABASE_URL);

export default sql;

// This SQL function we export is used as a tagged template literal, 
// which alllows us to write SQL quries safely
