const express = require('express')
const router = express.Router()

router.get("/itenary", (req, res) => {
    res.render("itenary", { alltrips: trips, totaltrips: trips.lengths })
})

router.get('/', (req, res) => {
    res.render('addtrip')
})


router.post("/itenary-post", (req, res) => {
    const city = req.body.city
    const fromdate = req.body.fromdate
    const todate = req.body.todate
    const image = req.body.imagelink

    let trip = { city: city, fromdate: fromdate, todate: todate, image: image }
    trips.push(trip)
    console.log(trips)
    res.redirect("/addtrip/itenary")
})











module.exports = router