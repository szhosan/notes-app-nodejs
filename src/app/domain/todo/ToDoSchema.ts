const Joi = require("joi");

export const contactAddSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().min(2).required(),
  category: Joi.string().valid("task", "thought", "idea").required(),
  created: Joi.string().required(),
});
