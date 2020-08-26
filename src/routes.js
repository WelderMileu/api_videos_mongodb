const router = require('express').Router();
const Rest = require('./controllers/crud');

const data = new Rest()

router.get('/', data.videoAll);
router.post('/post', data.videoAdd);
router.delete('/delete?:id', data.videoDelete);
router.put('/update', data.videoUpdate);

// Exportando nossas rotas
module.exports = router;