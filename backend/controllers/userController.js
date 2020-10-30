const db = require('../db');
const bcrypt = require('bcryptjs');

// @desc		Auth User and get token
// @route 	POST /api/users/login
// @access 	Public
const authUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailInDb = await db.query(
      `SELECT email FROM users where email='${email}'`
    );

    if (emailInDb) {
      const pwdInDb = await db.query(
        `SELECT password FROM users WHERE email = '${email}'`
      );
      console.log(pwdInDb.rows[0].password);
      if (await bcrypt.compare(pwdInDb.rows[0].password, password)) {
        res.json('Authenticated');
      } else {
        res.json('Password incorect');
      }
    } else {
      res.json('Email not Present');
    }
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  authUser: authUser,
};
