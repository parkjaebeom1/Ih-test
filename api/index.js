const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/api/get', function (req, res) {
 res.json({test:'Hello World!'});
});

app.post('/api/post', function (req, res) {
    console.log(req.body);
    res.json({test:'Hello World!'});
});
app.post('/', function (req, res) {
    // console.log(req.body);
     const data = req.body;
     console.log('req.body', data);
     res.send('api: OK');
     const messageId = req.body['events'][0]['message']['id'];
     console.log(messageId);
    });

// app.listen(3000, function () {
// });
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); // Heroku