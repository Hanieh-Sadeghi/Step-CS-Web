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

app.get("/", function (req, res) {
  res.send(result);
});

//CRUD  Create , Read , Update , Delete

//Create
app.post("/", function (req, res) {
  const data = req.body;
  db.push(data);
  res.send("POST API");
});

// Read
app.get("/", function (req, res) {
  res.json(db);
});

// Update
app.put("/", function (req, res) {
  //   console.log(req.body.id);
  db.forEach((item) => {
    if ((item.id = req.body.id)) {
      item.city = req.body.city;
      item.temp = req.body.temp;
      item.status = req.body.status;
    }
  });
  res.send("PUT API");
});

// Delete
app.delete("/", function (req, res) {
  db.forEach((item) => {
    if (item.id == req.body.id) {
      let index = db.indexOf(item);
      db.slice(index, 1);
      res.json(db);
    }
  });
});

app.listen(PORT, function (req, res) {
  if (err) console.log(err);
  console.log("server listening on PORT", PORT);
});
