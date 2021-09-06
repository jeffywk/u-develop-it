const express = require('express');
const Router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;