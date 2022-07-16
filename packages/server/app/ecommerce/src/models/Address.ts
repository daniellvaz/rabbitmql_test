import mongoose from "mongoose";
import Address from "../entities/Address";

export const AddressSchema = new mongoose.Schema({
  userId: String,
  street: String,
  number: Number,
  zipCode: String,
  city: String
});

export const AddressModel = mongoose.model<Address>("addresses", AddressSchema);