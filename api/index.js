const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/get', function (req, res) {
 res.json({test:'Hello World!'});
});

app.post('/api/post', function (req, res) {
    console.log(req.body);//get방식은 
    res.json();
});


// app.listen(3000, function () {
// });
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); // Heroku