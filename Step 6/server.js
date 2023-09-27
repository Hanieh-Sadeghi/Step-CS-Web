const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
const db = [
  {
    id: 1,
    city: "tehran",
    temp: "5",
    status: "rainy",
  },
  {
    id: 2,
    city: "canada",
    temp: "8",
    status: "rainy",
  },
  {
    id: 3,
    city: "US",
    temp: "33",
    status: "clear",
  },
];

//CRUD  Create , Read , Update , Delete

//Create
app.post("/", function (req, res) {
  const data = req.body;
  res.send("POST API");
});

// Read
app.get("/", function (req, res) {
  res.json(db);
});

// Update
app.put("/", function (req, res) {
  res.send("PUT API");
});

// Delete
app.delete("/", function (req, res) {
  res.send("Delete API");
});
