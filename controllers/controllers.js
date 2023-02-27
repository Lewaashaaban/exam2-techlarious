const express = require('express');
const router = express.Router();
const Url = require('../models/model');

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;

  try {
      let url = await Url.findOne({ longUrl });

    if (url) {
      res.json(url);
    } else {
      const urlCode = generateUrlCode();
      const shortUrl = `${process.env.BASE_URL}/${urlCode}`;

      url = new Url({
        longUrl,
        urlCode,
        shortUrl
      });

      await url.save();

      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({message: "Error"});
  }
});

function generateUrlCode() {

}
module.exports = router;
