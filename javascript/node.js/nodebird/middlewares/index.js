exports.isLoggedIn = (req,res,next) => {
  if(req.isAuthenticated()){
    next();
  }else{
    res.status(403).send('로그인 필요');
  }
};

exports.isNotLoggedIn=(req,res,next) => {
  if(!req.isAuthenticated()){
    next();
  }else{
    const message=encodeURIComponent('이미 로그인 중.');
    res.redirect(`/?error=${message}`);
  }
};