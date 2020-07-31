const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/', productsController.getAll)
router.get('/:id', productsController.getById)
router.post('/', productsController.create)
router.post('/:id/images', productsController.createImage)
router.patch('/:id', productsController.patch)//atualiza alguns dados
router.put('/:id', productsController.put)//atualiza todos os dados
router.delete('/:id', productsController.remove)
router.delete('/:productId/images/id', productsController.removeImage)

module.exports = router