import Joi from "joi";

const starValidationSchema = Joi.object({
  name: Joi.string().min(5).max(80).required(),
  celebrityName: Joi.string().min(5).max(50).required(),
  about: Joi.string().min(10).max(1000).required(),
})

export {
  starValidationSchema
}
