var BaseRepository = require('./baseRepository');

class CommentRepository extends BaseRepository {
	constructor(){
		super();
		this.table = 'comments';
	}
}


module.exports = CommentRepository;