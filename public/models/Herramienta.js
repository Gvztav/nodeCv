var mongoose = require('mongoose');
var HerramientaSchema = new mongoose.Schema({
  herramienta: String,
  descripcion:String,
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Herramienta', HerramientaSchema);