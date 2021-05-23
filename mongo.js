const mongoose = require("mongoose");

if (process.argv.length < 3) {
    console.log("Please provide database user password");
    process.exit(1);
}
const url = `mongodb+srv://fullstack:${process.argv[2]}@cluster0.ddhr5.mongodb.net/phonebook?retryWrites=true&w=majority`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length < 4) {
    Person.find({})
        .then((result) => console.log(result))
        .then(() => {
            mongoose.connection.close();
        });
} else {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
    });

    person.save().then((result) => {
        console.log(
            `Added ${person.name} number ${person.number} to phonebook`
        );
        mongoose.connection.close();
    });
}
