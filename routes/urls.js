import express from 'express';
import { nanoid } from 'nanoid';
import Url from '../model/model.js';
import { validateUrl } from '../utils/utils.js';

const router = express.Router();

router.post('/shortUrls', async (req, res) => {
  const { fullUrl } = req.body;
  //   Generate unique id to identify url
  const urlId = nanoid();

  if (validateUrl(fullUrl)) {
    try {
      let url = await Url.findOne({ fullUrl });
      if (url) {
        res.status(200).json({ url });
      } else {
        const shortUrl = `http://127.0.0.1:5000/${urlId}`;
        url = new Url({
          fullUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });
        await url.save();
        res.status(201).json({
          url,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).json('Invalid Original Url');
  }
});

export default router;
