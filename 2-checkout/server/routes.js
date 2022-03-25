const controller = require('./controllers/controllers');
const router = require('express').Router();

router.get('/', (req, res) => controller.users.get(req, res));
router.post('/', (req, res) => controller.users.post(req, res));

router.put('/form_1', (req, res) => controller.form_1.put(req, res));
router.put('/form_2', (req, res) => controller.form_2.put(req, res));
router.put('/form_3', (req, res) => controller.form_3.put(req, res));

module.exports = router;