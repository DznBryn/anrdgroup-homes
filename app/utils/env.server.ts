import { config } from 'dotenv';
config();

export default {
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  KLAVIYO_TEST_API_KEY: process.env.KLAVIYO_TEST_API_KEY,
  KLAVIYO_API_VERSION: process.env.KLAVIYO_API_VERSION,
};