const express = require("express");
const path = require("path");
const members = require("./Members");


const app = express();

// body parser middleware(helps to update existing api)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (req, res) => {
//   res.send("<h3>this page is about programming</h3>");
// });

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => console.log("Hello World!!"));
