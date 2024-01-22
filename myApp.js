require('dotenv').config();
const mongoose = require('mongoose');
//const Persona = require('./models/Persona');

mongoose.connect((process.env.MONGO_URI), { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

// Función para crear y guardar una nueva persona
function createAndSavePerson(name, age, favoriteFoods, callback) {
  // Crea una instancia del modelo Person
  const newPerson = new Person({
    name: name,
    age: age,
    favoriteFoods: favoriteFoods
  });

  // Guarda la instancia del documento en la base de datos
  newPerson.save((err, data) => {
    if (err) {
      // Maneja el error en caso de fallo al guardar
      return console.error(err);
    }
    // Llama al callback pasando el documento guardado
    callback(null, data);
  });
}

// Ejemplo de uso
createAndSavePerson('John Doe', 25, ['Pizza', 'Ice Cream'], (err, savedPerson) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Persona guardada correctamente:', savedPerson);
  }
});



const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
