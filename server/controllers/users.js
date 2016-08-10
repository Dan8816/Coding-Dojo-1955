var mongoose = require('mongoose');
User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(req, res) {
			res.send('hiiiii');
		},
		create: function(req, res) {
			user = new User(req.params)
			user.save(function(err){
				if(err){
					res.send(err)
				}else {
					res.send('user saved')
				}
			})	
		},
		remove: function(req, res) {
			User.remove({name: req.params.name}, function(err, users) {
				if(err) {
					res.send('error');
				} else {
					res.send('removed');
				}
			}
		)
		},
		show: function(req, res) {
			User.find({name: req.params.name}, function(err, users) {
				if(err) {
					res.send('error');
				} else {
					res.send(users);
				}
			}
		)
		},

	}
})();