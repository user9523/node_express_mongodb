const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const metghodOverride = require('method-override')
const errorHandler =  require('errorhandler')
const routers = require('./routes')

module.exports = function(app){
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(metghodOverride())
    app.use(cookieParser('secret-value'))
    app.use('./public/', express.static(path.join(__dirname,'./public')))

    if(app.get('env') === 'development'){
        app.use(errorHandler());
    }
    routers(app)
    return app
}