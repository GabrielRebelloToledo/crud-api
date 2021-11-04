var app = require('./config/express');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");


app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

var porta = process.env.PORT || 3000;

app.listen(porta, function() {
    console.log('Server ON in port' + porta);
})

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'app/uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

module.exports = upload;


app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file
    console.log(file.filename);
    if (!file) {
        const error = new Error('Por favor faça o upload de um arquivo')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})


app.post('/multipleFiles', upload.array('files'), (req, res, next) => {
    const files = req.files;
    console.log(files);
    if (!files) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send({ sttus: 'ok' });
})