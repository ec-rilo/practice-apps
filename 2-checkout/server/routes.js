const controller = require('./controllers/controllers');
const router = require('express').Router();

// do this!!!!
router.get('/', controller.users.get);
router.post('/', controller.users.post);
router.put('/', controller.users.put);

router.put('/form_1', controller.form_1.put);
router.put('/form_2', controller.form_2.put);
router.put('/form_3', controller.form_3.put);

module.exports = router;