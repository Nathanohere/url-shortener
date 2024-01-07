import express from 'express';
import Url from '../model/model.js';

const router = express.Router();

router.get('/:urlId', async (req, res) => {
  try {
    const url = await Url.findOneAndUpdate(
      { urlId: req.params.urlId },
      {
        $inc: { clicks: 1 },
      }
    );
    if (!url)
      return res.status(400).json({
        message: 'No url found',
      });
    res.status(200).redirect(url.fullUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

export default router;
