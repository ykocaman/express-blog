var BaseRepository = require('./baseRepository');

class PostRepository extends BaseRepository {
	constructor(){
		super();
		this.table = 'posts';
	}
}


module.exports = PostRepository;