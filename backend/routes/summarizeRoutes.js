const express = require("express");
const router = express.Router();

router.post('/',  async (req, res) => {
    try {
      const response = await axios.post('https:linawa-backend-api.onrender.com/api/summarize/', {
        text: req.body.text,
      });
      res.json(response.data);
    } catch (err) {
      console.error('Error from Hugging Face API:', err);
      res.status(500).send('Error summarizing text');
    }
  });

module.exports = router;