const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
});

//export default personSchema;