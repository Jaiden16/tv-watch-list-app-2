var express = require('express');
var router = express.Router();
const db = require("../database/database.js");

//Get Comment by show
const GetShowComments = async (req, res) => {
    try {
        let showComments = await db.any(`SELECT comments.id, username, comments.comment_body FROM comments
                                        JOIN users ON comments.user_id = users.id 
                                        Where show_id = ${req.params.show_id}
                                        Order By id`)                                
        res.json({
            comments: showComments,
            message: `Success`
        })

    } catch (err) {
        console.log(`Error ${err}`)
        res.json({
            message: `Error`
        })
    }
}

const PostComment = async (req, res) => {
    let commentObject = {
        comment_body: req.body.comment_body,
        user_id: req.body.user_id,
        show_id: req.body.show_id
    }
    let query = `INSERT into comments(comment_body,user_id, show_id)
    Values ($/comment_body/,$/user_id/,$/show_id/)`
    try {
        console.log('Posted')
        let postComment = await db.one(query, commentObject)
        res.json({
            comment: postComment,
            message: "Comment posted"
        })

    } catch (err) {
        console.log(err)
        res.json({
            err: err
        })
    }

}

router.get('/show/:show_id', GetShowComments);
router.post('/comment', PostComment)


module.exports = router;
