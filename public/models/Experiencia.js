var mongoose = require('mongoose');
var ExperienciaSchema = new mongoose.Schema({
  tituloJob: String,
  time:String,
  compania:String,
  contenido:String,
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Experiencia', ExperienciaSchema);