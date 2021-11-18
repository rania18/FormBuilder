const mongoose = require('mongoose');
const schema = mongoose.Schema;

const formSchema = new schema({
  formName: String,
  formURL: String,
  queTitle: String,
    options: {String},
},{
    timestamps: true
});


module.exports = mongoose.model('Form', formSchema);