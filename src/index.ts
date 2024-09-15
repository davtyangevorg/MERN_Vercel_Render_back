import express from "express";
import path from "path";

const app = express();

const port = process.env.PORT || 3000;

const cors = require("cors");

const allowedOrigins = ["https://mern-vercel-render-front.vercel.app"]; // Replace with your actual front-end URL
const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

//middleware
app.use(cors(corsOptions));

// Route to serve the index.html file
app.get("/", (req, res) => {
  // Serve index.html from the public directory
  res.sendFile(path.join(__dirname, "index.html"));
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
