const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.postTicket)
router.get('/:id/tickets/new', flightsCtrl.addTicket)

module.exports = router;
