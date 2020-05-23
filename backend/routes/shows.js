var express = require('express');
var router = express.Router();
const db = require("../database/database.js")

const GetAllShows = async (req, res) =>{
    try{
        let allShows = await db.any("Select * FROM shows")

        res.json({
            shows: allShows,
            message: "Sucess"
        })

    }catch(err){
        console.log('Error', err)
        res.json({
            message: `Error ${err}`
        })
    }
}


router.get('/', GetAllShows);



module.exports = router;