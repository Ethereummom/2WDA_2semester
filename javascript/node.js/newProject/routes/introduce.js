const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.render('introduce',
    {message :'ristorante Florence', array:["PASTA","T-BONE","WINES"], 
    menu:{id:'PASTA', exchange:'upbit', img:'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8mKVO%2FbtrN4FodvtG%2FcvyPHxhniYUgPQMmMRRpI0%2Fimg.jpg'
}});
});

module.exports = router;