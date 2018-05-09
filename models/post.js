var Base = require('./base');
var repository = require('./../repositories/postRepository');

class Post extends Base {
	constructor(){
		super();
		this.repository = new repository();
	}
}

module.exports = new Post();
