import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subscriptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
      required: true,
    },
    trainerName: {
      type: String,
      required: false,
    },
    trainerGenderPreference: {
      type: String,
      enum: ["Male", "Female", "Any"],
      default: "Any",
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    preferredDate: {
      type: String,
      required: true,
    },
    preferredTime: {
      type: String,
      required: true,
    },
    specialRequests: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);