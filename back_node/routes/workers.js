const express = require('express');
const router = express.Router();
const Worker = require('../models/Worker');
const cors = require('./cors');

router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, async (req, res) => {
    try {
        const workers = await Worker.find();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(workers);
    } catch(err) {
        res.json({message: err});
    }
})
.post(cors.cors, async (req, res) => {
    const worker = new Worker({
        name: req.body.name,
        position: req.body.position,
        photo: req.body.photo,
        instagram: req.body.instagram,
        telegram: req.body.telegram,
        mail: req.body.mail
    });

    try {
        const savedWorker = await worker.save();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(savedWorker);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;