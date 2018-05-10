var db = require('./../singletons/db');

class BaseRepository {
	constructor(){
        if (this.constructor === BaseRepository) {
            throw new TypeError('Abstract class');
        }
		this.db = db.getInstance();
	}

	/* promise ile callback karmaşası azaltıldı */
	query(sql,args ) {
		return new Promise((resolve, reject) => {
		    this.db.query( sql, args, (err,rows) => {
			if (err){
			    return reject(err);
			}
			resolve(rows);
		    });
		});
	}

	all (){
		return this.query('select * from ' + this.table);
	}

	find (id){
		return this.query('select * from ' + this.table + ' where id=? limit 1', [id]);
	}

	insert(data){
		return this.query('insert into ' + this.table + ' set ?', [data]);
	}

	where(condition){
		return this.query('select * from ' + this.table + ' where ?', [condition]);
	}
}


module.exports = BaseRepository;
