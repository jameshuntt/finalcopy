const router = require('express').Router();
let User = require('../../models/user');

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        firstName,
        email,
        password,
    });

    newUser.save()
        .then(() => res.json('User info sent.'))
        .catch(err => res.status(400).json('Error ' + err + '.'));
});

module.exports = router;