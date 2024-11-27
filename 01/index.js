const express = require('express');

const app = express();
const port = 8000;

app.get('/hello', (req, res) => {
    return res.send('Hello page')
})

app.get('/hello/:randomText', (req, res) => {
    return res.send(req.params.randomText);
})

app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})