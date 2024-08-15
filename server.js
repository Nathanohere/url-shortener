import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
import app from './app.js';

// const router = require('./routes');

// 5I3zvJH4qgmgNKIL
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('DB is running successfully');
});

// app.use('/api/v1/user', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
