const mongoose = require('mongoose')

const Schema = mongoose.Schema

const audioSchema = new Schema({
	filename : {
		type: String,
		required : true,
	}, 
	url: {
		type: String,
		required : true,
	},
	year : Number, 

	genres:{
		type: [String], 
		required: false,
	},
})

const AudioFile = mongoose.model("AudioFile", audioSchema)

module.exports = AudioFile