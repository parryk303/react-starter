const controller = require('./controller.js')
const router = require('express').Router();

router.post('/post', controller.post);
router.get('/get', controller.get);

module.exports = router;