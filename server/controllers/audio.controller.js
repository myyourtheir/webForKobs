const AudioFile = require('../models/Audio.js')

const handleError = (res, error) =>{
	res.status(500).json({error})
}

const getAudios =(req, res)=>{
	AudioFile
    .find()
    .sort({filename: 1})
    .then((audioFiles)=>{
      res
        .status(200)
        .json(audioFiles)
    })
    .catch((e)=>{handleError(res, e)})
}

const getAudio = (req, res)=>{
	AudioFile
    .findById(req.params.id)
    .then((audio)=>{
      res
        .status(200)
        .json(audio)
    })
    .catch((e)=>{handleError(res, e)})
    }

const saveAudio =(req, res)=>{
	const audio = new AudioFile(req.body)
  audio
    .save()
    .then(result=>{
      res
        .status(201)
        .json(result)
    })
    .catch((e)=>{handleError(res, e)})
}

const deleteAudio =(req, res)=>{
	AudioFile
	.findByIdAndDelete(req.params.id)
	.then(result=>{
		res
			.status(200)
			.json(result)
	})
	.catch((e)=>{handleError(res, e)})
}

const updateAudio =(req, res)=>{
	AudioFile
    .findByIdAndUpdate( req.params.id, req.body)
    then(result=>{
      res
        .status(200)
        .json(result)
    })
    .catch((e)=>{handleError(res, e)})
}
module.exports ={
	getAudios,
	getAudio,
	saveAudio,
	deleteAudio, 
	updateAudio
}