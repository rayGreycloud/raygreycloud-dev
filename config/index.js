export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://raygreycloud-dev.vercel.app'
    : 'http://localhost:3000';
