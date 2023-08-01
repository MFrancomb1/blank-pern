const express = require('express');
require('dotenv').config();
const pool = require('./db');

const app = express();
const port = process.env.PORT

//middleware
app.use(express.json());

//API
a

app.listen(port, ()=>{
	console.log(`now listening on port ${port}`);
});	
