var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');

/* Modeller */
var post = require('./../models/post');
var comment = require('./../models/comment');

/* GET Tüm yazıları listele */
router.get('/', function(req, res, next) {
	post.all()
	.then(result => res.render('posts', {posts: result}))
	.catch(err => res.send('Hata oluştu.'));
});

/* GET ID'ye göre yazıyı göster */
router.get('/:id', function(req, res, next) {
	post.find(req.params.id)
	.then(result => {
		comment.where({post_id: req.params.id})
		.then(comments => res.render('post', {post: result[0], comments: comments}))
		.catch(err => res.send('Hata oluştu.'));
	})
	.catch(err => res.send('Hata oluştu.'));
});

/* POST Yazıya yapılan yorumu kaydet */
router.post('/:id', function(req, res, next) {
	req.checkBody('comment', 'Minimum 10 harfli yorum yapmalısınız!').isLength({ min: 10 });

	const errors = req.validationErrors();

	if (errors) {
		res.render('comment-error', {id: req.params.id, error: errors[0].msg});
	}else{
		comment.insert({post_id: req.params.id, body: req.body.comment});
		res.render('comment-success', {id: req.params.id});
	}

});


module.exports = router;
