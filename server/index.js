const express = require('express');
const app = express();
const router = express.Router(); // Création d'un routeur Express
app.use(express.json());
const crypto = require('crypto');
const cors = require('cors');
const serverless = require('serverless-http'); // Importer serverless-http
app.use(cors());

const PORT = process.env.PORT || 10000;

require('./db/connection');
const Users = require('./Model/User');
const UserModal = require('./Model/Data');

// Configuration des routes
app.post("/", async (req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
});

app.get("/getHotels", async (req, res) => {
    UserModal.find({})
        .then(function (ut) {
            res.json(ut);
        })
        .catch(function (err) {
            res.json(err);
        });
});

app.post('/forgot-password', (req, res) => {
    crypto.randomBytes(32, (err, Buffer) => {
        if (err) {
            console.log(err);
        }
        const token = Buffer.toString("hex");
        Users.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "User does not exist with that email" });
                }
                user.resetToken = token;
                user.save().then(result => {
                    Transporter.sendMail({
                        to: user.email,
                        from: "no-replay@insta.com",
                        subject: "password reset",
                        html: `
                            <p>You requested for password reset</p>
                            <h5>click in this <a href="http://localhost:4000/forgot-password/${token}" >link</a>to reset password</h5>`
                    });
                });
            });
    });
});

// Endpoint pour ajouter des données d'hôtel
app.post("/addHotel", async (req, res) => {
    const hotelData = req.body; // Les données d'hôtel envoyées depuis le frontend

    try {
        // Créer une nouvelle instance du modèle d'hôtel avec les données reçues
        const newHotel = new UserModal(hotelData);

        // Enregistrer les données de l'hôtel dans la base de données
        await newHotel.save();

        // Répondre avec les données de l'hôtel ajoutées
        res.json(newHotel);
    } catch (error) {
        // En cas d'erreur lors de l'ajout des données de l'hôtel
        console.error(error);
        res.status(500).send("Erreur lors de l'ajout des données de l'hôtel");
    }
});

// Utilisation du routeur pour les fonctions serverless
app.use("/.netlify/functions/app", router);

// Exporter une version serverless de l'application Express
module.exports.handler = serverless(app);

// Démarrage du serveur Express
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://0.0.0.0:${PORT}`);
});
