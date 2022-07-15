import mongoose from "mongoose";
import { Delivery } from "../entities/Delivery";

export const DeliverySchema = new mongoose.Schema({
  userId: String,
  saleId: Number,
  trackingCode: String,
});

export const DeliveryModel = mongoose.model<Delivery>("Delivery", DeliverySchema);