const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { User } = require('../models');

router.get('/me', auth, async (req, res) => {
  const user = await User.findByPk(req.userId, { attributes: ['id', 'name', 'email'] });
  return res.json(user);
});

module.exports = router;
