const express = require('express');
const { searchByHashtag, getMyPosts, renderMain, modifyForm, deletePost,modifyPost } = require('../controllers');

const router = express.Router();

router.get('/myposts', getMyPosts);

router.get('/search', searchByHashtag);

router.get('/', renderMain);

router.get('/delete/:id', deletePost);

router.get('/modifyform/:id' , modifyForm);

router.post('/modify/:id',modifyPost)

module.exports = router;