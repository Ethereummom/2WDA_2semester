const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');

const {sequelize} = require("./models");

const app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'html');
nunjucks.configure('views',{
    express : app,
    watch : true
});

sequelize.sync({force:false})
.then(() => {
    console.log('DB 연결 성공');
})
.catch((err) => {
    console.error(err);
});

//기본설정 - morgan, express 등등...

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//my routers 내 라우터들 코드가 곧 들어옴



//404처리
app.use((req,res,next) => {
    const err = new Error('존재하지 않는 주소입니다');
    err.status = 404;
    next(err);
});

app.use((err,req,res,next)=> {
    const status = err.status || 500;
    res.locals.message = err.message;
    res.locals.err = err;
    res.render('error');
    

});
app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '포트에서 대기');
});