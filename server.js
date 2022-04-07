var request = require('request')
const express = require("express")
const app = express()

const port = process.env.PORT || 5000

app.get('/test', (req, res) => {
    console.log(req.query.user);
    res.send("given parameter on app" + ' ' + req.query.user);
});

app.get('/weather', (req, res) => {

    var options = {
        'method': 'GET',
        'url': 'https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=22cb765ca2798e070571cf927b374f8c&units=metric',
        'headers': {}
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

})

app.listen(port, () => {
    console.log("server is running in port" + ' ' + port);
})

console.log("Welcome to first NodeJS app development!")