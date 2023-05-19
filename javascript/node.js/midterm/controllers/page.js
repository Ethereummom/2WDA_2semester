const { User, Admin,} = require('../models');

exports.renderProfile = (req, res) => {
  res.render('profile', { title: '회원 정보 -sanghee.com' });
};

exports.renderJoin = (req, res) => {
  res.render('join', { title: '회원가입 -sanghee.com' });
};

exports.renderMain = async (req, res, next) => {
    try {
        const users = await User.findAll({
          order: [['usernumber', 'DESC']],
        });
        res.render('main', {
          title: 'midterm',
          users: users 
        });
      } catch (err) {
        console.error(err);
        next(err);
      }
    }