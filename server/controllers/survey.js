const SurveyModel = require("../models/survey");

/**
 * creates an empty survey
 * @param name
 * @param description?
 *
 * @return {*}
 */
const createSurvey = async (req, res) => {
  const { name, description = "" } = req.body;
  if (!name) {
    res.statusCode = 400;
    res.json({ errors: ["name parameter is required"] });
    return;
  }
  try {
    const survey = await SurveyModel.create({ name, description });
    if (survey && survey._id) {
      const { _id: id, name, description } = survey;
      return res.json({
        data: {
          survey: { id, name, description }
        }
      });
    }
  } catch (ex) {
    console.log("failed to create survey", ex);
  }
  res.statusCode = 500;
  res.json({ errors: ["failed to create survey"] });
};

/**
 * retrieve a survey
 * @param id
 *
 * @return {*}
 */
const getSurvey = async (req, res) => {
  const { id } = req.params;
  try {
    const survey = await SurveyModel.findById(id);
    if (survey && survey._id) {
      const { _id: id, name, description } = survey;
      return res.json({
        data: {
          survey: { id, name, description }
        }
      });
    } else {
      res.statusCode = 404;
    }
  } catch (ex) {
    console.log("failed to fetch survey", ex);
    req.statusCode = 500;
  }
};

module.exports = {
  createSurvey,
  getSurvey
};
