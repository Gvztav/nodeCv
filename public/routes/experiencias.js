var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Experiencia = require('../models/Experiencia.js');
/* GET /Experiencias listing. */
router.get('/', function(req, res, next) {
  Experiencia.find(function (err, Experiencias) {
    if (err) return next(err);
    res.json(Experiencias);
  });
});

/* POST /Experiencias */
router.post('/', function(req, res, next) {
  Experiencia.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Experiencias/id */
router.get('/:id', function(req, res, next) {
  Experiencia.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Experiencias/:id */
router.put('/:id', function(req, res, next) {
  Experiencia.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Experiencias/:id */
router.delete('/:id', function(req, res, next) {
  Experiencia.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
