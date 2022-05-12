const mongoose = require('mongoose'); // install and require mongoose
mongoose.connect("mongodb://localhost:27017/animalsDB"); // connect and create the respective db


const Cat = mongoose.model('Cat', { name: String, age:{type:Number, min: 1, max: 5} }); // create an object schema
// you can include validators in the schema like min and max for a number
// or required: [true, "Please check your data entry, you cant send an empty name"]

const kitty = new Cat({ name: 'JOhhny', age: 4 }); // create the object
kitty.save().then(() => console.log('meow')); // console.log to see if our object is stored


Cat.find(function(err, kitty){ //shows my new object in the console
  if(err){
    console.log("error"); // check for error
  }
  else{
    console.log(kitty); //success scenario: outputs the new value
  }
// update an already exist data
// Cat.updateOne({_id: "copy id from console"}, {the item: the value to be changed})

//Mongo db relationships:
/*
const Cat = mongoose.model('Cat', { name: String, age:{type:Number, min: 1, max: 5} });
const Person = mongoose.model('Person',
{
name: String,
age: Number,
favouriteCat: Cat
});



*/


 mongoose.connection.close(); //automaticaly closes the connection to my database
});
