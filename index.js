const express = require("express");
const app = express();
app.use(express.json());

const contacts = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1,
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2,
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3,
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4,
    },
];

app.get("/api/persons", (request, response) => {
    response.send(contacts);
});

app.get("/info", (request, response) => {
    const date = new Date();
    response.send(
        `<p>Phonebook has info for ${contacts.length} people</p><p>${date}</p>`
    );
});

const port = 3001;
app.listen(port, () => {
    console.log("Working on", port);
});
