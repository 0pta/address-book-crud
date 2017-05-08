var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* GET contacts listing. */
router.get('/', (req, res, next) => {
  knex('addresses')
  .innerJoin('contacts', 'addresses.id', 'contacts.addresses_id')
  .then(function(contacts) {
    res.render('contacts/index', {
      contacts
    })
  })
});


//Create One
router.get('/create', (req, res)=>{
  knex('addresses')
  .innerJoin('contacts', 'addresses.id', 'contacts.addresses_id')
  .then((contact)=>{
    res.render('contacts/create', {
      contact
    });
  });
});

/* GET one. */
router.get('/:id', (req, res) => {
  var id = req.params.id;
  knex('contacts')
  .innerJoin('addresses', 'addresses.id', 'contacts.addresses_id')
  .where('contacts.id', id)
  .first()
  .then((contact) => {
    res.render('contacts/contact', {
      contact
    })
  })
});

/* DELETE one. */
// router.delete('/:id', (req, res) => {
//
// })



module.exports = router;
