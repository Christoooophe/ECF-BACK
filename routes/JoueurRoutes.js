const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const joueurJSONPath = path.join(__dirname, "../data/joueur.json" );

// Liste de tous les joueurs
router.get('/joueurs', (req, res) => {
    fs.readFile(joueurJSONPath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Erreur de fichier : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }
        const listeJoueurs = JSON.parse(data);
        res.json(listeJoueurs)
    })
})

// Récupérer un seul joueur
router.get('/joueurs/:id', (req, res) => {
    fs.readFile(joueurJSONPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de fichier : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }

        const listeJoueurs = JSON.parse(data);
        const joueur = listeJoueurs.find(joueur => joueur.id === parseInt(req.params.id))

        if (!joueur) {
            res.status(404).send('Livre non trouvé');
        }

        res.json(joueur);
    })
});

// Ajout nouveau joueur
router.post('/ajout-joueur', (req, res) => {
    const nouveauJoueur = req.body
    console.log(req.body)

    fs.readFile(joueurJSONPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de fichier : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }

        const listeJoueurs = JSON.parse(data)
        listeJoueurs.push(nouveauJoueur)

        fs.writeFile(joueurJSONPath, JSON.stringify(listeJoueurs), err => {
            if (err) {
                console.error('Erreur lors de l\'écriture dans le fichier JSON :', err);
                res.status(500).send("Erreur interne du serveur");
                return;
            }

            res.status(201).send("Joueur ajouté avec succès")
        })

    })
});


module.exports = router;
