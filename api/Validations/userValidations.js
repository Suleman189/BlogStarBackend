import Joi from "joi";

const useValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(14).required(),
})

export const validateUser = (data) => {
  return useValidationSchema.validate(data)
}
