import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Suscription name is required"],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    price: {
      type: Number,
      require: [true, "Subscription price is require"],
      min: [0, "Price must be grater then 0"],
    },
    currency: {
      type: String,
      enum: ["USD", "BDT", "EUR"],
      default: "USD",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
      type: String,
      enum: [
        "sports",
        "music",
        "movies",
        "news",
        "food",
        "helath",
        "education",
        "other",
      ],
      require: [true, "Subscription category is required"],
    },
    paymentMethod: {
      type: String,
      require: [true, "Payment method is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "canceled", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      require: [true, "Start date is required"],
      validate: {
        validator: (value) => value <= new Date(),
        message: "Start date must be in the past",
      },
    },
    renewalDate: {
      type: Date,
      require: [true, "Start date is required"],
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "Renewal date must be after start date",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "User is required"],
      index: true,
    },
  },
  { timestamps: true }
);
