const jwt = require('jsonwebtoken');
const { Domain, User, Post, Hashtag } = require('../models');
const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');



exports.createToken = async (req, res) => {
  const { clientSecret } = req.body;
  try {
    const domain = await Domain.findOne({
      where: { clientSecret },
      include: {
        model: User,
        attribute: ['nick', 'id'],
      },
    });
    if (!domain) {
      return res.status(401).json({
        code: 401,
        message: '등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요',
      });
    }
    const token = jwt.sign({
      id: domain.User.id,
      nick: domain.User.nick,
    }, process.env.JWT_SECRET, {
      expiresIn: '30m', // 30분
      issuer: 'nodebird',
    });
    return res.json({
      code: 200,
      message: '토큰이 발급되었습니다',
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: '서버 에러',
    });
  }
};


exports.tokenTest = (req, res) => {
  res.json(res.locals.decoded);
};

exports.getMyPosts = (req, res) => {
  Post.findAll({ where: { userId: res.locals.decoded.id } })
    .then((posts) => {
      console.log(posts);
      res.json({
        code: 200,
        payload: posts,
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        code: 500,
        message: '서버 에러',
      });
    });
};

exports.getAllPosts = (req, res) => {
  const query = `
    SELECT posts.*, users.nick
    FROM posts
    JOIN users ON posts.UserId = users.id
  `;
  sequelize.query(query, { type: QueryTypes.SELECT })
    .then(posts => {
      console.log(posts);
      res.json({
        code: 200,
        payload: posts,
      });
    })
    .catch(error => {
      console.error(error);
      return res.status(500).json({
        code: 500,
        message: '서버 에러',
      });
    });
};

exports.getPostsByHashtag = async (req, res) => {
  try {
    const query = await Hashtag.findOne({ where: { title: req.params.hashtag } });
    if (!query) {
      return res.status(404).json({
        code: 404,
        message: '검색 결과가 없습니다',
      });
    }
    const posts = await query.getPosts();
    return res.json({
      code: 200,
      payload: posts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: '서버 에러',
    });
  }
};

exports.deletePostById = async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.pid } });
    if (!post) {
      return res.status(404).json({
        code: 404,
        message: '삭제할 게시물을 찾을 수 없습니다',
      });
    }

    await post.destroy();
    return res.redirect('http://localhost:4000/myposts');
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: '서버 에러',
    });
  }
};
exports.modifyFormById = async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.pid } });
    if (!post) {
      return res.status(404).json({
        code: 404,
        message: '수정할 게시물을 찾을 수 없습니다',
      });
    }
    // 게시물 정보 응답
    res.json({
      code: 200,
      payload: post,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: '서버 에러',
    });
  }
};

exports.modifyPostById = async (req, res) => {
  console.log(req.params.pid)
  try {

    const post = await Post.findOne({ where: { id: req.params.pid } });
    if (!post) {
      return res.status(404).json({
        code: 404,
        message: '수정할 게시물을 찾을 수 없습니다',
      }); 
    }
    // 게시물 수정
    post.content = req.body.content;
    await post.save();

    return res.redirect('http://localhost:4000/myposts');
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: '서버 에러',
    });
  }
};

