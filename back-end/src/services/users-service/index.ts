import bcrypt from "bcrypt";
import {
  createSession,
  getUserOrFail,
  validatePasswordOrFail,
  validateUniqueEmailOrFail,
} from "./helpers";
import { exclude } from "@/utils/prisma-utils";
import userRepository from "@/repositories/user-repository";
import { User } from "@/protocols";
import { Users } from "@prisma/client";

async function createUser({ username, email, password, user_url }: any) {
  
  await validateUniqueEmailOrFail(email);

  const hashedPassword: string = await bcrypt.hash(password, 12);

  const data: User = {
    username,
    email,
    password: hashedPassword,
    user_url,
  };

  const newUser: Users = await userRepository.create(data);

  return newUser;
}

async function signIn({ email, password }: any) {
  const user = await getUserOrFail(email);
  await validatePasswordOrFail(password, user.password);

  const token: string = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function searchUsers({ username }: any) {
  const users = await userRepository.searchUsers({ username });
  return users;
}
const userService = {
  createUser,
  signIn,
  searchUsers
};

export default userService;
