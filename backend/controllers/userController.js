const db = require('../db');

const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// @desc		Auth User and get token
// @route 	POST /api/users/login
// @access 	Public
const authUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.query(`SELECT * FROM users where email='${email}'`);

    if (user) {
      const pwdInDb = await db.query(
        `SELECT password FROM users WHERE email = '${email}'`
      );
      const pwdhash = pwdInDb.rows[0].password;

      bcrypt.compare(password, pwdhash, function (err, result) {
        if (result) {
          res.json({
            id: user.rows[0].id,
            email: user.rows[0].email,
            name: user.rows[0].name,
            isadmin: user.rows[0].isadmin,
            token: generateToken(user.rows[0].id),
          });
        } else {
          res.json({ message: 'Password Incorrect' });
        }
      });
    }
  } catch (error) {
    res.status(401).json({ message: 'Email not found' });
  }
};

// @desc		Get User Profile
// @route 	GET /api/users/profile
// @access 	Private
const getUserProfile = async (req, res) => {
  res.json();
};

module.exports = {
  authUser: authUser,
  getUserProfile: getUserProfile,
};
