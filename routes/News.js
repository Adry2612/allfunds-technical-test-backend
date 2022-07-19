let express = require('express')
let NewsController = require('../controllers/New')

let router = express.Router()

router.get('/get', NewsController.getNews)
router.post('/save', NewsController.saveNew)
router.put('/archive/:id', NewsController.archiveNew)
router.delete('/remove/:id', NewsController.removeNew)

module.exports = router