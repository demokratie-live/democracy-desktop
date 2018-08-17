// import 'dotenv/config';

export default {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  PORT: process.env.PORT || 3000,
  GRAPHQL_URL: process.env.GRAPHQL_URL || 'http://localhost:3000/graphql',
};

console.log('constants', process.env.PORT);
