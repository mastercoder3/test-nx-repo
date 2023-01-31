const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.post('/test', (req, res) => {
    console.log(req.body);
    res.status(200).send({message: "OK"})
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});
