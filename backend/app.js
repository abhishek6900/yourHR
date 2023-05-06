require("dotenv").config();
require("./utils/db");
const express = require("express");
const port = process.env.PORT || 5000;
const jobRoutes = require("./routes/jobRoutes.js")
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("working");
})

app.use(express.json());
app.use("/api/jobs" , jobRoutes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})