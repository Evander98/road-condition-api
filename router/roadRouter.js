const router = require('express').Router()
const { postRoad } = require('../controller').roadController

router.post('/addRoad', postRoad)


module.exports = router