var express = require('express');
var router = express.Router();
const db = require("../database/database.js");

/*Get All Genres Function */
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


/*Get Single Genres Function */
const GetSingleGenres = async (req, res) => {
  try {
    let singleGenres = await db.any(`SELECT * FROM genres WHERE id = ${req.params.id}`)

    res.json({
      users: singleGenres,
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
    let newGenre = await db.one(`INSERT into genres (genre_name) 
    Values ($/genre_name/) RETURNING *`, genreObject)
    res.json({
      user: newGenre,
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

/* GET genres listing. */
router.get('/', GetAllGenres);
router.get('/:id', GetSingleGenres);
router.post('/',PostGenre)

module.exports = router;
