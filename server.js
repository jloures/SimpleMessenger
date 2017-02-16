const express = require('express');
const app = expres();
const PORT = process.env.PORT || 9000;

app.get('/', (req,res) => {
    res.send('My messaging app!');
});

app.listen(PORT, () => {
    console.log('Listening at port', PORT);
})