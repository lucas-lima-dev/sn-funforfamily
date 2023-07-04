import { Post } from "@/protocols";
import joi, { ObjectSchema } from "joi";

export const postSchema: ObjectSchema<Post> = joi.object({
    url: joi.string().uri().required(),
    description: joi.string().allow(''),
});
