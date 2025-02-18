const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const emailRoutes = require('./routes/email');
const geminiRoutes = require('./routes/gemini');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


app.use('/api/users', userRoutes);
app.use('/api/emails', emailRoutes);
app.use('/api/gemini', geminiRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});