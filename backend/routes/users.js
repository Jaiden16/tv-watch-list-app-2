var express = require('express');
var router = express.Router();
const db = require("../database/database.js");

/*Get All Users Function */
const GetAllUsers = async (req, res) => {
  try {
    let allUsers = await db.any("SELECT * FROM users")

    res.json({
      users: allUsers,
      message: "Success"
    })

  } catch (err) {
    console.log(`Error`, err)
    res.json({
      message: `Error ${err}`
    })
  }
}

/*Get One User*/
const GetSingleUser = async (req, res) => {
  try {
    let singleUser = await db.one(`SELECT * FROM users WHERE id = ${req.params.id}`)
    res.json({
      user: singleUser,
      message: "Success"
    })

  } catch (err) {
    console.log(`Error`, err)
    res.json({
      message: "No User Found"
    })
  }
}

/*Post User*/
const PostUser = async (req, res) => {
  let userObject = {
    username: req.body.username,
    avatar_url: req.body.avatar_url
  }
  try {
    if (req.body.username, req.body.avatar_url) {
    let newUser = await db.one(`INSERT into users (username, avatar_url) 
    Values ($/username/,$/avatar_url/) RETURNING *`, userObject)
    res.json({
      user: newUser,
      message:"Success"
    })

    }


  } catch (err) {
    console.log(err)
    res.json({
      message: "Missing Information"
    })
  }
}

/* GET users listing. */
router.get('/', GetAllUsers);
router.get('/:id', GetSingleUser);
router.post('/',PostUser)

module.exports = router;
