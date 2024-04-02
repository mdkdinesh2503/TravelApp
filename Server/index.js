const express = require('express');
const { getDb, connectToDb } = require('./db');
const { ObjectId } = require('mongodb');

const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET, POST, PUT, PATCH, DELETE, HEAD',
  credentials: true,
}));

app.use(express.json());

// Db Connection
let db;

connectToDb((error) => {
  if(!error){
    app.listen('3000', () => {
      console.info('Success - Localhost Server!!')
    })
    db = getDb()
  }
})

app.get('/registers', (req, res)=> {
  let registers = []

  db.collection('registers')
    .find()
    .sort({id: 1})
    .forEach(register => registers.push(register))
    .then(() => {
      res.status(200).json(registers)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
})

app.get('/registers/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {

    db.collection('registers')
      .findOne({_id: new ObjectId(req.params.id)})
      .then(doc => {
        res.status(200).json(doc)
      })
      .catch(error => {
        res.status(500).json({error: 'Could not fetch the document'})
      })
      
  } else {
    res.status(500).json({error: 'Could not fetch the document'})
  }

})

app.post('/registers', async (req, res) => {
  const register = req.body;

  db.collection('registers')
    .insertOne(register)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(error => {
      res.status(500).json({error: 'Could not create new document'})
    })
})

app.delete('/registers/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {

  db.collection('registers')
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(error => {
      res.status(500).json({error: 'Could not delete document'})
    })

  } else {
    res.status(500).json({error: 'Could not delete document'})
  }
})

app.patch('/registers/:id', (req, res) => {
  const updates = req.body

  if (ObjectId.isValid(req.params.id)) {

    db.collection('registers')
      .updateOne({ _id: new ObjectId(req.params.id) }, {$set: updates})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        res.status(500).json({error: 'Could not update document'})
      })

  } else {
    res.status(500).json({error: 'Could not update document'})
  }
})
