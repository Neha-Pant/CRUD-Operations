var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var StudentSchema = new Schema({
  rid:String,
  name: String,
  course: String,
  address: String,
  marks:String
});

module.exports = mongoose.model('Student',StudentSchema,'Student');
