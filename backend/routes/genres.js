var express = require('express');
var router = express.Router();
const db = require("../database/database.js");

/*Get All Users Function */
const GetAllGenres = async (req, res) => {
  try {
    let allGenres = await db.any("SELECT * FROM genres")

    res.json({
      users: allGenres,
      message: "Success"
    })

  } catch (err) {
    console.log(`Error`, err)
    res.json({
      message: `Error ${err}`
    })
  }
}

/*Post User*/
const PostGenre = async (req, res) => {
  let genreObject = {
    genre_name: req.body.genre_name,
  }
  try {
    if (req.body.genre_name) {
    let newUser = await db.one(`INSERT into genres (username, avatar_url) 
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
