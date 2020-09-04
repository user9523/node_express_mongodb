const express = require('express');
// 调用刚才server下的中间件封装

const configure = require('./server/configure')

app = express()
app = configure(app)

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send('hello world!');
});

app.listen(app.get('port'), function(){
    console.log(`Server is running on http://localhost:${app.get('port')}`);
})