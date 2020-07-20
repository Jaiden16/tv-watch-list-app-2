var express = require('express');
var router = express.Router();
const db = require("../database/database.js")

const GetAllShows = async (req, res) => {
    try {
        let allShows = await db.any("Select * FROM shows")

        res.json({
            shows: allShows,
            message: "Sucess"
        })

    } catch (err) {
        console.log('Error', err)
        res.json({
            message: `Error ${err}`
        })
    }
}

const GetSingleShow = async (req, res) => {
    try {
        let singleShow = await db.one(`Select * FROM 
        shows WHERE id = ${req.params.id}`)

        res.json({
            shows: singleShow,
            message: "Success"
        })

    } catch (err) {
        console.log(`Error`, err)
        res.json({
            message: `Error ${err}`
        })
    }
}



const ShowsByGenre = async (req, res) => {
    try {
        let showsGenre = await db.any(`Select * FROM shows WHERE genre_id = ${req.params.genre_id}`)
        res.json({
            showsGenre: showsGenre,
            message: "Success"
        })

    } catch (err) {
        console.log(`Error`, err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const ShowsByUserId = async (req, res) => {
    try {
        let showsUser = await db.any(`
        SELECT shows_users.user_id, shows_users.show_id, shows.title, shows.img_url, genres.genre_name  FROM shows_users
        JOIN shows ON shows_users.show_id = shows.id    
        JOIN genres ON shows.genre_id = genres.id
        WHERE user_id = ${req.params.user_id}`)
        res.json({
            showsUser: showsUser,
            message: "Success"
        })

    } catch (err) {
        console.log(`Error`, err);
        res.json({
            message: `Error ${err}`
        })

    }
}

const GetAllShowsUsers = async (req,res) =>{
    let query =`SELECT shows_users.show_id, users.id, users.username, users.avatar_url FROM shows_users
    JOIN users ON shows_users.user_id = users.id
    WHERE show_id = ${req.params.show_id}`
    try{
        let showsUsers = await db.any(query)
        res.json({
            payload: showsUsers,
            msg: "success"
        })

    }catch(err){
        console.log(err)
    }
}

const PostNewShow = async (req, res) => {
    let showsObject = {
        title: req.body.title,
        img_url: req.body.img_url,
        user_id: req.body.user_id,
        genre_id: req.body.genre_id
    }
    //todo create two insert queries 

    try {
        if (req.body.title, req.body.img_url, req.body.user_id, req.body.genre_id) {
            let newShow = await db.one(`INSERT into shows (title,img_url,user_id,genre_id) 
            Values ($/title/, $/img_url/,$/user_id/, $/genre_id/)RETURNING *`, showsObject)
            res.json({
                show: newShow,
                message: "Success"
            })
        }
    } catch (err) {
        console.log(err)
        res.json({
            message: `Error ${err}`
        })
    }
}



const AddShowsUser = async (req, res) =>{
    let showObj ={
        show_id: req.body.show_id,
        user_id: req.body.user_id
    }
    let query = `Insert into shows_users(show_id,user_id)
    Values($/show_id/,$/user_id/) RETURNING *`

    try{
        let data = await db.one(query,showObj)
        console.log(data)
        res.json({
            show: data,
            msg: `posted ${showObj}`
        })

        
    }catch(err){
        console.log(err)
        res.json({
            data: null,
            msg: 'something went wrong'
        })
    }
}


//Get shows
router.get('/', GetAllShows);

//Get Shows/:id
router.get('/:id', GetSingleShow);


//Get Show by genre.. genre/genre_id
router.get('/genre/:genre_id', ShowsByGenre);

//Get Show by user.. user/user_id
router.get('/user/:user_id', ShowsByUserId);

//Get a Shows Users
router.get(`/shows/:show_id`,GetAllShowsUsers)

//Post
router.post('/newshow', PostNewShow);

router.post('/newshowuser', AddShowsUser);


module.exports = router;