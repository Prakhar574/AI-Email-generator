const express = require('express');
const router = express.Router();
const { google } = require('googleapis');

router.post('/generate', async (req, res) => {
    const { feedback } = req.body;

    
    const response = await someGeminiApiFunction(feedback); 
    res.json(response.data);
});

module.exports = router;