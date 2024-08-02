const express = require('express');
const app = express();
const cors = require("cors")
const PORT = 8000;
const questionRoutes = require('./routes/QuestionsRoutes');
const joueurRoutes = require("./routes/JoueurRoutes");


app.use(cors())

app.use(express.json())

app.use('/api', questionRoutes);
app.use('/api', joueurRoutes);

app.listen(PORT, () => {
    console.log("Serveur en écoute sur le port", PORT);
})
