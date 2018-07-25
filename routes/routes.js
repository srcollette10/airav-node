'use strict'

const express = require('express')
const router = express.Router()
const pingController = require('../controllers/ping.controller')
const visionController = require('../controllers/vision.controller')

router.get('/ping', pingController.ping)
router.post('/', visionController.read)

module.exports = router;