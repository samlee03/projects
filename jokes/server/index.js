import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    // Placeholders
    let categories = ['Programming', 'Christmas'];
    let type = "single"; // can also be "twopart"
    let amt = '2';

    const JokeParams = {
        category: categories.join(','),
        type: type,
        amt: amt
    };
    fetch(`https://v2.jokeapi.dev/joke/${JokeParams.category}?type=${JokeParams.type}&amount=${JokeParams.amt}`)
    .then(response => response.json())
    .then(data => {
        res.send(data);
    })
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
