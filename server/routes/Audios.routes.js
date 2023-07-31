const express = require('express');
const {
	getAudios,
	getAudio,
	saveAudio,
	deleteAudio,
	updateAudio,
} = require('../controllers/audio.controller')

const router = express.Router()

router.get('/api/audios', getAudios)
router.get('/api/audios/:id', getAudio)
router.post("/api/save", saveAudio)
router.delete("/api/delete/:id", deleteAudio)
router.patch('/api/update/:id', updateAudio)

module.exports = router





