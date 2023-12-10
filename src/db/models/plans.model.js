import mongoose from "mongoose";
const collection = "planes";

const planSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: "The plan id is required",
      unique: true,
    },
    reason: {
      type: String,
      required: "The reason is required",
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    _id: false,
  }
);

const planModel = mongoose.model(collection, planSchema);
export default planModel;
