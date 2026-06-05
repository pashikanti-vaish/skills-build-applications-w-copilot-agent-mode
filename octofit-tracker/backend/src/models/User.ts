import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  age?: number;
  weight?: number;
  height?: number;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    age: {
      type: Number,
      min: 1,
      max: 150
    },
    weight: {
      type: Number,
      min: 0
    },
    height: {
      type: Number,
      min: 0
    }
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', userSchema);
