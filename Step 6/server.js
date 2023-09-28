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
    temp: "20",
    status: "clear",
  },
  {
    id: 4,
    city: "uk",
    temp: "25",
    status: "clear",
  },
];

app.get("/", function (req, res) {
  res.send(db);
});

//CRUD  Create , Read , Update , Delete

//Create
app.post("/", function (req, res) {
  const data = req.body;
  db.push(data);
  res.send("POST API");
  console.log(req.body)
});

// Read
app.get("/", function (req, res) {
  res.json(db);
});

// Update
app.put("/", function (req, res) {
  //   console.log(req.body.id);
  db.forEach((item) => {
    if ((item.id == req.body.id)) {
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
      console.log(req.body.id)
      let index = db.indexOf(item);
      db.slice(index, 1);
      console.log(item)
    }
  });
  res.json(db);
});

app.listen(PORT, function (req, res) {
  console.log("server listening on PORT", PORT);
});
