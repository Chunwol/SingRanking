import * as dotenv from 'dotenv';
dotenv.config();

export const webHost : string = process.env.WEB_HOST! || '0.0.0.0';
export const webPort : string = process.env.WEB_PORT! || '3000';
