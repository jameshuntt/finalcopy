const router = require('express').Router();
let Contact = require('../../models/contact');

router.route('/').get((req, res) => {
    Contact.find()
      .then(contacts => res.json(contacts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const message = req.body.message;

    const newContact = new Contact({
        name,
        email,
        phoneNumber,
        message
    });

    newContact.save()
        .then(() => res.json('Contact info sent.'))
        .catch(err => res.status(400).json('Error ' + err + '.'));
});

module.exports = router;