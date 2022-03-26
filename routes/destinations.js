const express = require('express')
const router = express.Router()

destCtrl = require('../controllers/destinations')

router.post('/flights/:id/dest', destCtrl.create)

module.exports = router