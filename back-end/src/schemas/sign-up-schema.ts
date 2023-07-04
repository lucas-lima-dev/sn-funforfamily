import joi from "joi";

export const signUpSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  user_url: joi.string().uri().required(),
});