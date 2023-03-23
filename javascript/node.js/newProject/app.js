const express = require('express');
const morgan = require('morgan');
const cookieParser =require('cookie-parser');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const menuRouter = require('./routes/menus');
const locationRouter = require('./routes/location');
const introduceRouter = require('./routes/introduce');

dotenv.config();

const app = express();
app.set('port', process.env.PORT||3000);
//set함수를 이용하여 전역변수를 만듬. (전역변수 , 값)
app.set('views',path. join(__dirname,'views'));
app.set('view engine', 'pug');
//pug를사용하기위한 조건정의

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname,'public')));
app.use(express.json());
//json string과 객체의 차이
//json string은 변수이름까지도 전부 string으로감싼다, ex) {"id":"mike43"}
//객체일때 ex) {id : "mike43"}
app.use(express.urlencoded({extended :false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
//내가발급한 cookie가 맞는지를 판별하여 해킹방지
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

app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/menus', menuRouter);
app.use('/location',locationRouter);
app.use('/introduce',introduceRouter);

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use((req,res,next) => {
    const err = new Error("wrong request");
        //404에러 띄울 자리(잘못된(맞지 않는) 요청)
    err.status = 404;
    next(err);
});

app.use((err,req,res)=>{
    const status = req.status || 500;
});



app.listen(app.get('port') ,() => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});