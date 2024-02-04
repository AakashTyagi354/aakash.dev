"use server";

import { connectedDB } from "../db";
import User from "../models/user";

interface inputProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerAction = async (values: inputProps) => {
  await connectedDB();

  try {
    const { username, email, password, confirmPassword } = values;
    const newUser = new User({ username, email, password, confirmPassword });
    await newUser.save();
    return {
      message: "user saved SUCCESSFULly ",
    };
  } catch (err) {
    console.log("ERROR IN REGISTER ACTION"+err);
  }
};
