import { SignInUser } from "@/protocols";
import joi, { ObjectSchema } from "joi";

export const signInSchema: ObjectSchema<SignInUser> = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });