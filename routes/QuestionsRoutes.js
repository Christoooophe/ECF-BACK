const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const questionsJSONPath = path.join(__dirname, "../data/questions.json" );

router.get('/questions', (req, res) => {
    fs.readFile(questionsJSONPath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Erreur de fichier : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }
        const listeQuestions = JSON.parse(data);
        res.json(listeQuestions)
    })
})

router.get('/questions/:id', (req, res) => {
    fs.readFile(questionsJSONPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de fichier : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }

        const listeQuestions = JSON.parse(data);
        const question = listeQuestions.find(question => question.id === parseInt(req.params.id))

        if (!question) {
            res.status(404).send('Livre non trouvé');
        }

        res.json(question);
    })
});

module.exports = router;
