const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('news api runnig')
})

app.get('/news-catagories', (req, res) => {
    res.send(catagories)
})

app.listen(port, () => {
    console.log('dragon news server runnig on port 5000;', port)
})