const express = require('express');
const morgan = require('morgan');
const cookieParser =require('cookie-parser');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.set('port', process.env.PORT||3000);
//set함수를 이용하여 전역변수를 만듬. (전역변수 , 값)

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended :false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave :false,
    saveUninitialized :false,
    secret : process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure:false,
    },
    name : 'session-cookie',
}));

app.use((req,res,next) => {
    console.log('모든 요청이 거쳐갑니다.')
    next();
})

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port') ,() => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});