const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
	title : {
		type: String,
		required: true
	},
	url : {
		type: String,
		required: true
	},
	favorite : {
		type: Boolean,
		default: false
	}
});

mongoose.model('video', videoSchema)



