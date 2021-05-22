const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

app.use(express.static("build"));
app.use(cors());
app.use(express.json());
app.use(
    morgan(
        ":method :url :status :res[content-length] - :response-time ms :body"
    )
);

morgan.token("body", function (req, res) {
    if (req.method === "POST") {
        return JSON.stringify(req.body);
    }
});

let contacts = [
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

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    const person = contacts.find((contact) => contact.id === id);
    if (person) {
        response.send(person);
    } else {
        response.status(404).end();
    }
});

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    contacts = contacts.filter((contact) => contact.id !== id);
    response.status(204).end();
});

app.post("/api/persons", (request, response) => {
    const body = request.body;
    const newId = Math.floor(Math.random() * 100000);

    if (!body.name || !body.number) {
        return response.status(400).json({ error: "name or number missing" });
    }

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === body.name) {
            return response
                .status(400)
                .json({ error: "this name is already in use" });
        }
    }

    const newContact = {
        name: body.name,
        number: body.number,
        id: newId,
    };

    contacts = contacts.concat(newContact);
    response.json(newContact);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
