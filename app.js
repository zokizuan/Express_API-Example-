const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// Connecet to DB

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useNewURLParser: true }, () => {
	console.log("Connected to DB");
});

//Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
	console.log("Home");
	res.send("Home");
});

//Listening
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


// module.exports = app;