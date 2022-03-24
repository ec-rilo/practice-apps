const controller = require('./controllers/controllers');
const router = require('express').Router();

router.get('/', (req, res) => controller.users.get(req, res));
router.post('/', (req, res) => controller.users.post(req, res));
router.put('/form-1', (req, res) => controller.form_1.put(req, res));

module.exports = router;