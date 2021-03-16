const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const dogSchema = new Schema({
    name: {type: String, required: true },
    breed: {type: String, required: true}, 
    description: { type: String, required: true },
    img: String,
    age: { type: Number, min: 0 },
    loveable: { type: Number, min: 0, max: 10 }
});

const Dog = model('Dog', dogSchema);

module.exports = Dog;