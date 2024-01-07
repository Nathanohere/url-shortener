import express from 'express';
const app = express();
import cors from 'cors';
import morgan from 'morgan';

import urlRouter from './routes/urls.js';
import redirectRouter from './routes/redirect.js';

app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', urlRouter);
app.use('/', redirectRouter);

// app.post('/shortUrls', async (req, res) => {
//   // Create a short url
//   await urlmodel.create({ fullUrl: req.body });

//   res.status(201).redirect('/');
// });

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index');
// });

export default app;
