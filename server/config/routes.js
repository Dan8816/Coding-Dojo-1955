users = require('./../controllers/users.js')

module.exports = function(app) {

	app.get('/', function(req, res) {
		User.find({}, function(err, users) {
			if(err){
				res.send(err)
			} else {
				res.send(users)
			}
		})
	})
	app.get('/add/:name', function(req, res) {
		users.create(req, res);
	})

	app.get('/remove/:name', function(req, res) {
		users.remove(req, res);
	})
	app.get('/:name', function(req, res) {
		users.show(req, res);
	})


	




}