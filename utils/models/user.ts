import mongoose, { Document } from "mongoose";


interface formSchema extends Document {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const userSchema = new mongoose.Schema<formSchema>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User || mongoose.model<formSchema>("User", userSchema);
export default User;
