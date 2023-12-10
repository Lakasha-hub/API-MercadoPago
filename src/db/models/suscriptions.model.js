import mongoose from "mongoose";
const collection = "suscripciones";

const suscriptionSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      default: true,
    },
    purchaser: {
      type: String,
      required: "The purchaser is required",
    },
    plan_id: {
      type: String,
      required: "The plan id is required",
    },
    amount: {
      type: Number,
      required: "The amount is required",
    },
    ends_at: {
      type: Date,
      required: "The end date is required",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const suscriptionModel = mongoose.model(collection, suscriptionSchema);
export default suscriptionModel;
