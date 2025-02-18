const express = require('express');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && user.password === password) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});


router.post('/draft', async (req, res) => {
    const { userId, draft } = req.body;
    await User.findByIdAndUpdate(userId, { $push: { drafts: draft } });
    res.send('Draft saved');
});

module.exports = router;