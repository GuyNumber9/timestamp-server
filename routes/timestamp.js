let express = require('express');
let router = express.Router();

let timestampController = require('../controllers/timestamp');

router.get('/:date_string?', timestampController.timestampGET);

module.exports = router;