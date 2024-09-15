import express from "express";
const app = express();

const port = process.env.PORT || 3000;

const cors = require("cors");
//domain whitelist
const whitelist = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

//middleware
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  //html
  res.sendFile(__dirname + "/index.html");
});

app.get("/users", (req, res) => {
  //json
  res.json([
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
