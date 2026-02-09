import mongoose, { Schema, models } from "mongoose";

const resourceSchema = new Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    link: { type: String, required: true },
    tag: { type: String, required: true },
    category: { type: String, required: true }, // Frontend ද Backend ද කියලා හඳුනාගන්න
  },
  { timestamps: true }
);

const Resource = models.Resource || mongoose.model("Resource", resourceSchema);
export default Resource;