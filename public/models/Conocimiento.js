var mongoose = require('mongoose');
var ConocimientoSchema = new mongoose.Schema({
  titulo: String,
  descripcion:String,
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Conocimiento', ConocimientoSchema);