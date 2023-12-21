import express from 'express'
import {body} from 'express-validator'

import {addMatch,getAllMatchs,patchMatch} from "../Controllers/Match.controller.js"


const router = express.Router()
router.route("/")
.post(
    body('date').isLength({min:5}),
    body('teamHome').isLength({min:2}),
    body('teamAway').isLength({min:2}),
    addMatch
)
.get(getAllMatchs)


router.route("/:id")
.patch(body('date').isLength({min:5 }),patchMatch)


export default router
