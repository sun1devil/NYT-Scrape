var mongoose = require("mongoose");


var Schema = mongoose.Schema;

// create a new NoteSchema

var NoteSchema = new Schema({
 
  title: String,
 
  body: String
});

// create the model based on above
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;