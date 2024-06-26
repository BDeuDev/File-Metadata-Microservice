const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/fileanalyse', upload.single('upfile'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const { originalname, mimetype, size } = req.file;
    res.status(200).json({
        name: originalname,
        type: mimetype,
        size: size
    });
});

module.exports = router;
