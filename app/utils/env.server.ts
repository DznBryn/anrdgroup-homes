import { config } from 'dotenv';
config();

export default {
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
};