const Vigenere = require('caesar-salad').Vigenere;
const express = require('express');

const app = express();
const port = 8000;

app.get('/encode/:encodedText', (req, res) => {
    return res.send(Vigenere.Cipher('password').crypt(req.params.encodedText));
})

app.get('/decode/:decodedText', (req, res) => {
    return res.send(Vigenere.Decipher('password').crypt(req.params.decodedText));
})

app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})