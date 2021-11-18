const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
// require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const formsRoute = require('./routes/form.routes.js');
app.use('/', formsRoute)

const PORT = 5000
const MONGO_URL = "mongodb+srv://admin:admin@cluster0.fbbbi.mongodb.net/formBuilder?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL, 
    {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {app.listen(PORT, ()=>{console.log(`server is running at ${PORT}`)})})
    .catch((error)=>{console.log(error)}
);

// mongoose.set('useFindAndModify', false)
