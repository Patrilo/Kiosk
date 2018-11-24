const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

router.get('/', ensureLoggedIn("/auth/login"),(req, res, next) => {
  res.render('comments');
});

module.exports = router;
