import { User } from "@/protocols";
import joi, { ObjectSchema } from "joi";

export const signUpSchema: ObjectSchema<User> = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  user_url: joi.string().uri().required(),
});