import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    subImage: { type: [String], required: true },
    visitingPlaces: { type: [String], default: [] },
    includes: [
      {
        image: { type: String, required: true }, // Cloudinary URL
        name: { type: String, required: true },
      },
    ],
    Hotel: { type: [String], default: [] },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    image: { type: String, required: true }, 
    description: { type: String },
    MoreDetail: { type: String },
  },
  { minimize: false }
);


const PackageModel =
  mongoose.models.package || mongoose.model("package", PackageSchema);

export default PackageModel;
