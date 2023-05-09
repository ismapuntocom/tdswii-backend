const express = require('express')
const router = express.Router()
const { upload, uploadAudio } = require('../controllers/audioController')

router.post('/api/upload', upload.single('audio'), uploadAudio)

module.exports = router