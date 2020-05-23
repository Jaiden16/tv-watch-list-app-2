var express = require('express');
var router = express.Router();
const db = require("../database/database.js");

//Get Comment by show
const GetShowComments = async (req,res) => {
    try{
        let showComments = await db.any(`SELECT * FROM comments Where show_id = ${req.params.show_id}`)
        res.json({
            comments: showComments,
            message: `Success`
        })

    }catch(err){
        console.log(`Error ${err}`)
        res.json({
            message:`Error`
        })
    }
}

router.get('/show/:show_id',GetShowComments);


module.exports = router;
