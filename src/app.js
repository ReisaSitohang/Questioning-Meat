'use strict'
//Import modules
const express    =  require( 'express' )
const app        =  express( )
// const bodyParser =  require('body-parser')
// const Sequelize  =  require('sequelize')
// const session    =  require('express-session')
// const bcrypt     =  require('bcrypt-nodejs')
// const db         =  new Sequelize('cotree', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD,{
// 						host: 'localhost',
// 						dialect: 'postgres'
// 					});

//Use static folder
app.use (express.static(__dirname + '/public'))


//Setting Routes
let homeRouter = require( __dirname+'/routes/home' )

app.use('/', homeRouter )

//Set port

app.listen(3000, function () {
	console.log('Yep Running')
} )