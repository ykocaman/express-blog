
class Base{
	all (){
		return this.repository.all()
	}

	find (id){
		return this.repository.find(id)
	}

	insert (data){
		return this.repository.insert(data)
	}

	where (condition){
		return this.repository.where(condition)
	}
}

module.exports = Base;
