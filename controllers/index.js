
// Import MongoDB ObjectId for handling _id queries
const { ObjectId } = require('mongodb');

const awesomeFunction = (req, res, next) => {
    res.json ('Henry Dean Bondah');
};

const secondFunction = (req, res, next) => {
    res.json ('I am able to do it.');
};

const thirdFunction = (req, res, next) => {
    res.json ('another one done.');
};

// Handling all contacts
const getAllContacts = async (req, res) => {
    const db = req.app.locals.db;
    const contacts = await db.collection('contacts').find({}).toArray();
    res.json(contacts);
};

// Handling single contact by ID
const getContactById = async (req, res) => {
    const db = req.app.locals.db;
    const { id } = req.params;
    const contact = await db.collection('contacts').findOne({ _id: new ObjectId(id) });
    res.json(contact);
};
 
module.exports = { awesomeFunction, secondFunction, thirdFunction, getAllContacts, getContactById };
