const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addTicket,
    postTicket
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    if (req.body.departs === '' || req.body.departs === null) req.body.departs = undefined
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) {
            console.log(err)
            return res.redirect('/flights/new');
        }
        res.redirect('/flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {

        Ticket.find({ flight: flight._id }, function (err, ticket) {
            res.render('flights/show', { flight, ticket });
        })
    });
}

function addTicket(req, res) {
    res.render('tickets/new', { reqParamsId: req.params.id })
}

function postTicket(req, res) {
    req.body.flight = req.params.id
    console.log(req.body)
    const ticket = new Ticket(req.body)
    ticket.save()

    res.redirect('/flights')
}