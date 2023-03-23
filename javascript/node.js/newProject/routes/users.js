const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/',(req,res,next)=>{
    const users = ['a','b','c'];
    const name = req.query.name || 'unknown';
    const age = req.query.age || 20;

    console.log(name, age);
    res.json(users);
});

router.get('/:id',(req,res,next)=>{
    const id = req.params.id;
    //주로 primary key를 param으로 씀.(/users/abc)
    //primary key가 아닐때는 querystring (/users?name=aaa)
    res.send(id);

});
module.exports = router;

// /users GET : 모든 사용자 조회
// /users POST : 사용자 추가
// /users/:id GET : 해당 아이디 가진 사용자 조회
// /users/:id PUT/PATCH : 사용자 정보 수정