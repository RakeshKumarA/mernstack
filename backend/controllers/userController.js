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
    console.error(error.message);
    res.status(401).json({ message: 'Email not found' });
  }
};

// @desc		Get User Profile
// @route 	GET /api/users/profile
// @access 	Private
const getUserProfile = async (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
    name: req.user.name,
    isadmin: req.user.isadmin,
    token: generateToken(req.user.id),
  });
};

// @desc		Update User Profile
// @route 	PUT /api/users/profile
// @access 	Private
const updateUserProfile = async (req, res) => {
  const useridtobeupdated = req.user.id;
  req.user.email = req.body.email || req.user.email;
  req.user.name = req.body.name || req.user.name;
  if (req.body.password) {
    const hashThisPassword = req.body.password;
    req.user.password = bcrypt.hashSync(hashThisPassword, 10);
  }
  console.log(req.user.name);

  try {
    const updateUser = await db.query(
      'UPDATE users SET name=$1, email=$2, password= $3 where id=$4 returning *',
      [req.user.name, req.user.email, req.user.password, useridtobeupdated]
    );
    console.log(updateUser.rows[0]);
    res.status(200).json({
      id: updateUser.rows[0].id,
      email: updateUser.rows[0].email,
      name: updateUser.rows[0].name,
      isadmin: updateUser.rows[0].isadmin,
      token: generateToken(updateUser.rows[0].id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Unavailable' });
  }
};

// @desc		Register a user
// @route 	POST /api/users
// @access 	Public
const registerUser = async (req, res) => {
  const { name, email, password, isadmin } = req.body;

  const user = await db.query(`SELECT * FROM users where email='${email}'`);

  if (user.rowCount !== 0) {
    res.status(400).json({ message: 'User Already Exists' });
  }

  try {
    if (isadmin) {
      const results = await db.query(
        'INSERT INTO users (name, email, password, isAdmin) values ($1, $2, $3, $4) returning *',
        [name, email, bcrypt.hashSync(password, 10), isadmin]
      );
      const token = generateToken(results.rows[0].id);
      res.status(201).json({
        id: results.rows[0].id,
        name: results.rows[0].name,
        email: results.rows[0].email,
        isadmin: results.rows[0].isadmin,
        token: token,
      });
    } else {
      const results = await db.query(
        'INSERT INTO users (name, email, password) values ($1, $2, $3) returning *',
        [name, email, bcrypt.hashSync(password, 10)]
      );
      const token = generateToken(results.rows[0].id);
      res.status(201).json({
        id: results.rows[0].id,
        name: results.rows[0].name,
        email: results.rows[0].email,
        isadmin: results.rows[0].isadmin,
        token: token,
      });
    }
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Unavailable' });
  }
};

module.exports = {
  authUser: authUser,
  getUserProfile: getUserProfile,
  registerUser: registerUser,
  updateUserProfile: updateUserProfile,
};
