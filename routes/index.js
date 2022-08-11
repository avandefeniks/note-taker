const router = require('express').Router();
const apiRoutes = require('../routes/apiRoutes');
const htmlRoutes = require('../routes/htmlRoutes');

router.use(apiRoutes);
router.use(htmlRoutes);

module.exports = router;

