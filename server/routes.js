const router = require('express').Router();
const controllers = require('./controllers');

router.get('/entries/:email', controllers.getUserEntries);
router.post('/entry', controllers.addUserEntry);
router.put('/entry', controllers.updateUserEntry);
router.delete('/entry', controllers.deleteUserEntry);



module.exports = router;