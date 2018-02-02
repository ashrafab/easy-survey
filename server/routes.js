const express = require("express");
const router = express.Router();

const surveyRoutes = require("./controllers/survey.js");

router.get("/survey/:id", surveyRoutes.getSurvey);
router.post("/survey", surveyRoutes.createSurvey);

module.exports = router;
