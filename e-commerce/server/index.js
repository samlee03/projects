const express = require('express');
const cors =  require('cors');
const connectDB = require('./db.js');
const itemModel = require('./models/Item.js');
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', async (req, res) => {
    try {
        const response = await itemModel.find();
        res.json({ items: response });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

app.listen(5000, () => {
    console.log("App is running");
});