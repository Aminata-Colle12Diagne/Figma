const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/authentification').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


