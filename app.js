import express from 'express';

import db from "./views/db.js"

import usersRouter from "./routes/userRoute.js"

import authRouter from "./routes/authRoute.js"


var app = express();
var port = 3000;


// await db.read()

// db.data.users.push(
//     { id: 1 , name: 'Duan'}
//     )

// Write db.data content to db.json
// await db.write()

// console.log("db.data.users :", db.data.users)

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/styles/contom.css', function(req , res){
   res.send("abc")
})

app.get('/', function (require, response) {
    response.render('index', {
        name: 'AAA'
    });
})

app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(port, function () {
    console.log('Server listening on port :' + port)
})
