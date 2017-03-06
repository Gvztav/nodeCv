var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Conocimiento = require('../models/Conocimiento.js');
/* GET /Conocimientos listing. */
router.get('/', function(req, res, next) {
  Conocimiento.find(function (err, Conocimientos) {
    if (err) return next(err);
    res.json(Conocimientos);
  });
});

/* POST /Conocimientos */
router.post('/', function(req, res, next) {
  Conocimiento.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Conocimientos/id */
router.get('/:id', function(req, res, next) {
  Conocimiento.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Conocimientos/:id */
router.put('/:id', function(req, res, next) {
  Conocimiento.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Conocimientos/:id */
router.delete('/:id', function(req, res, next) {
  Conocimiento.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
