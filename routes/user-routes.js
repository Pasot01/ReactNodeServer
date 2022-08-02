const express = require("express");
const {signup} = require('../controllers/user-controller');

const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.send('Hello World')
// });

router.post('/signup', signup);

module.exports = router;