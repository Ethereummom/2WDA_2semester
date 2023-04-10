const express = require('express');
const cookieParser = require('cookie-parser');
const morgan =  require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks =  require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');


dotenv.config();

const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

const {sequelize} = require('./models');
const passportConfig = require('./passport');

const app = express();
passportConfig();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');

nunjucks.configure('views', {
    express : app,
    watch : true
});

sequelize.sync({force : false})
.then(()=>{
    console.log('데이터베이스 연결 성공');
})
.catch((err)=>{
    console.error(err);
});

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'public')));
app.use('/img',express.static(path.join(__dirname,'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// 내가 만든 라우터 들어갈 자리

app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);


// 404
app.use((req, res, next)=>{
    const error = new Error('존재하지 않는 주소입니다.');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기중');
});