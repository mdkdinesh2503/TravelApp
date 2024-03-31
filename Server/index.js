const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const mongoDbUrl ="mongodb+srv://dinesh:mdk@travelapp-db.w5uz0dp.mongodb.net/?retryWrites=true&w=majority&appName=TravelApp-Db";

// mongodb+srv://dinesh:mdk@travelapp-db.w5uz0dp.mongodb.net/
// Connection to Server & MongoDb Database
var dataname = "travel";
var database;

app.listen(5038, ()=> {
  console.info("Server connected Successfully!!");
  mongoose.connect(mongoDbUrl)
    .then(() => {console.info("Successfully connected to MongoDb Database!!");})
    .catch((error) => console.error("Error While Connecting to MongoDb Database!!", error))
});

app.get('/Server/travel/GetREgister', (request, response)=> {
  database.collection("registers").find({}).toArray((error, result)=> {
    response.send(result);
  });
})

// var registerRouter = require("./routers/register");

// app.use('/register', registerRouter);

// async function insert() {
//   await Register.create({
//     Name : "Kumar",
//     Email : "kumar@gmail.com",
//     Password : "Kumar@123"
//   });
// }
// insert();

// API endpoints
// app.post('/Server/register', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = new Register({ username, email, password });
//     await user.save();
//     res.status(201).send('User created successfully');
//   } catch (err) {
//     console.error('Error creating user:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });
