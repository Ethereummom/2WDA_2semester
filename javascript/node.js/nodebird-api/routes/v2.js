const express = require('express');

const { verifyToken, apiLimiter, corsWhenDomainMatches } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag, getAllPosts, deletePostById, modifyFormById, modifyPostById } = require('../controllers/v2');

const router = express.Router();

router.use(corsWhenDomainMatches);

// POST /v2/token
router.post('/token', apiLimiter, createToken);

// POST /v2/test
router.get('/test', apiLimiter, verifyToken, tokenTest);

// GET /v2/posts/my
router.get('/posts/my', apiLimiter, verifyToken, getMyPosts);

// GET /v2/posts/all
router.get('/posts/all', apiLimiter, verifyToken, getAllPosts);

// GET /v2/posts/search/:hashtag
router.get('/posts/hashtag/:hashtag', apiLimiter, verifyToken, getPostsByHashtag);

// GET /v2/posts/delete/:pid
router.get('/posts/delete/:pid' , apiLimiter, verifyToken, deletePostById)

// GET /v2/posts/modify/:pid
router.get('/posts/modifyform/:pid', apiLimiter, verifyToken, modifyFormById )

// POST /v2/posts/modify/:pid
router.post('/posts/modify/:pid', apiLimiter, verifyToken, modifyPostById )

module.exports = router;