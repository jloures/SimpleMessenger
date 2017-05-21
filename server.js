const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const path = require('path');

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req,res) => {
    res.sendFile('index.html');
});

app.listen(PORT, () => {
    console.log('Listening at port', PORT);
})