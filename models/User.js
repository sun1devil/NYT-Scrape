var mongoose = require("mongoose");

// Schema constructor
var Schema = mongoose.Schema;

// Schema constructor,

var UserSchema = new Schema({
 
  name: {
    type: String,
    unique: true
  },
 
  // populate the User with notes
  notes: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Note"
    }
  ]
});

// Create model
var User = mongoose.model("User", UserSchema);


module.exports = User;