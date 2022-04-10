const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const request = require('request');



app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/*
app.get('/api/get', function (req, res) {
 res.json({test:'Hello World!'});
});

app.post('/api/post', function (req, res) {
    console.log(req.body);
    res.json({test:'Hello World!'});
});
*/
app.post('/', function (req, res) {
    // console.log(req.body);
     const data = req.body;
     console.log('req.body', data);
     res.send('api: OK');
     const messageId = req.body['events'][0]['message']['id'];
     console.log(messageId);
     
     const options = {
        url : `https://api-data.line.me/v2/bot/message/${req.body.events[0].message.id}/content`,
        method: 'get',
        headers: {
            'Anthorization': 'Bearer ' + accessToken,
        },
        encoding: null
    };
    request(options, function(error, response, body){
        const buffer = new Buffer.from(body);

        console.log(ffffff);

        console.log(buffer);
    });

 });


// app.listen(3000, function () {
// });
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); // Heroku