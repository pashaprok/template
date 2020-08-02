const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');
const cors = require('./cors');

//route all dishes
router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes);
    } catch(err) {
        res.json({message: err});
    }
})
.post(cors.cors, async (req, res) => {
    const dish = new Dish({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        comments: []
    });

    try {
        const savedDish = await dish.save();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(savedDish);
    } catch(err) {
        res.json({message: err});
    }
});

//get specific dish
router.route('/:dishId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, async (req, res) => {
    try{
        const dish = await Dish.findById(req.params.dishId);
        res.json(dish);
    } catch(err) {
        res.json({message: err});
    }
})
.patch(cors.cors, async (req, res) => {
    try{
        const updatedDish = await Dish.updateOne({_id: req.params.dishId}, {
            $set: {
                name: req.body.name,
                image: req.body.image,
                category: req.body.category,
                price: req.body.price,
                description: req.body.description
            }
        });
        res.json(updatedDish);
    } catch(err) {
        res.json({message: err});
    }
})
.delete(cors.cors, async (req, res) => {
    try{
        const removedDish = await Dish.removeOne({_id: req.params.postId});
        res.json(removedDish);
    } catch(err) {
        res.json({message: err});
    }
})
.patch(cors.cors, async (req, res) => {
    try{
        const newComment = {
            comment: req.body.comment,
            author: req.body.author
        }
        const updatedDish = await Dish.updateOne({_id: req.params.dishId}, {
            $set: {
                comments: Array.push(newComment)
            }
        });
        res.json(updatedDish);
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;