var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Herramienta = require('../models/Herramienta.js');
/* GET /Herramientas listing. */
router.get('/', function(req, res, next) {
  Herramienta.find(function (err, Herramientas) {
    if (err) return next(err);
    res.json(Herramientas);
  });
});

/* POST /Herramientas */
router.post('/', function(req, res, next) {
  Herramienta.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Herramientas/id */
router.get('/:id', function(req, res, next) {
  Herramienta.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Herramientas/:id */
router.put('/:id', function(req, res, next) {
  Herramienta.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Herramientas/:id */
router.delete('/:id', function(req, res, next) {
  Herramienta.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
