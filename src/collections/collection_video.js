const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
	title : {
		type: String,
		require : true
	},
	url : {
		type: String,
		require: true
	},
	favorite : {
		type: Boolean,
		default: false
	}
});

mongoose.model('video', videoSchema)



