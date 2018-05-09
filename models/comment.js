var Base = require('./base');
var repository = require('./../repositories/commentRepository');

class Comment extends Base {
	constructor(){
		super();
		this.repository = new repository();
	}
}

module.exports = new Comment();
