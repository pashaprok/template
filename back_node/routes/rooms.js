const express = require('express');
const router = express.Router();
const Room =require('../models/Room');
const cors = require('./cors');

//route all rooms
router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, async (req, res) => {
    try {
        const rooms = await Room.find();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(rooms);
    } catch(err) {
        res.json({message: err});
    }
})
.post(cors.cors, async (req, res) => {
    const room = new Room({
        name: req.body.name,
        images: req.body.images,
        extras: req.body.extras,
        category: req.body.category,
        class: req.body.class, 
        price: req.body.price,
        size: req.body.size,
        description: req.body.description,
        comments: []
    });

    try {
        const savedRoom = await room.save();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(savedRoom);
    } catch(err) {
        res.json({message: err});
    }
});

//route specific room
router.route('/:roomId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, async (req, res) => {
    try{
        const room = await Room.findById(req.params.roomId);
        res.json(room);
    } catch(err) {
        res.json({message: err});
    }
})
.patch(cors.cors, async (req, res) => {
    try{
        const updatedRoom = await Room.updateOne({_id: req.params.roomId}, {
            $set: {
                name: req.body.name,
                images: req.body.images,
                extras: req.body.extras,
                category: req.body.category,
                class: req.body.class, 
                price: req.body.price,
                size: req.body.size,
                description: req.body.description
            }
        });
        res.json(updatedRoom);
    } catch(err) {
        res.json({message: err});
    }
})
.delete(cors.cors, async (req, res) => {
    try{
        const removedRoom = await Room.findByIdAndRemove(req.params.roomId);
        res.json(removedRoom);
    } catch(err) {
        res.json({message: err});
    }
})

//route specific room comments
router.route('/:roomId/comments')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, async (req, res) => {
    try{
        const room = await Room.findById(req.params.roomId);
        res.json(room.comments);
    } catch(err) {
        res.json({message: err});
    }
})
.post(cors.cors, async (req, res) => {
    const newComment = {
        comment: req.body.comment,
        author: req.body.author
    }
    try {
        const room = await Room.findById(req.params.roomId);
        const addNewComment = await room.comments.push(newComment);
        const saveRoom = await room.save(addNewComment);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(saveRoom);
    } catch(err) {
        res.json({message: err});
    }
})
.delete(cors.cors, async (req, res) => {
    try {
        const room = await Room.findById(req.params.roomId);
        const deleteComments = (room) => {
            for (var i = (room.comments.length -1); i >= 0; i--) {
                room.comments.id(room.comments[i]._id).remove();
            }
            return room;
        }
        const saveRoom = await room.save(deleteComments(room));
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(saveRoom);
    } catch(err) {
        res.json({message: err});
    }    
})

//route specific comment for specific room


module.exports = router;