
const express = require('express');
const app = express();
app.use(express.json());
const crypto = require('crypto') ;
const cors = require('cors');
app.use(cors());

require('./db/connection');
const Users = require('./Model/User');
app.post("/", async(req,res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
})
const UserModal = require('./Model/Data');
app.get("/getHotels", async (req, res)=>{
    UserModal.find({}).then(function(ut){
        res.json(ut)
    }).catch(function(err){
        res.json
    })
})



app.post('/forgot-password', (req, res)=>{
crypto.randomBytes(32,(err,Buffer)=>{
    if(err){
        console.log(err)
    }
    const token = Buffer.toString("hex")
    Users.findOne({email:req.body.email})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"User dont exists with that email"})
        }
        user.resetToken = token
        user.save().then((result)=>{
            Transporter.sendMail({
                to:user.email,
                from: "no-replay@insta.com",
                subject: "password reset",
                html:`
                <p>You requested for password reset</p>
                <h5>click in this <a href="http://localhost:4000/forgot-password/${token}" >link</a>to reset password</h5>`
            })
        })
    })
})
})


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

app.listen(4000);


