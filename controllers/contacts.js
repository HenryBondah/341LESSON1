// controllers/contacts.js
const mongodb = require('../db/connect');

const getAll = async (req, res, next) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection('contacts').find().toArray(); // Directly use db here
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingle = async (req, res, next) => {
  try {
    const db = mongodb.getDb();
    const userId = new ObjectId(req.params.id);
    const result = await db.collection('contacts').findOne({_id: userId});
    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Contact not found');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAll, getSingle };
