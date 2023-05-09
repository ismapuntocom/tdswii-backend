const AudioFile = require("../models/AudioFile")
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, Data.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

async function uploadAudioFile (req, res) {
    try {
        const { titulo, id_user_cargas } = req.body
        const newAudioFile = await AudioFile.create({ 
            titulo: titulo,  
            id_user_cargas: id_user_cargas 
        })
        console.log('File metadata saved to database:', audioFile);
        res.status(201).json(newAudioFile)
    } 
    catch (error) {
        console.error('Error saving file metadata to database:', error);
        res.status(400).json({
            error: error.name,
            message: error.message
        })
    }
}

module.exports = {
    uploadAudioFile,
    upload
}