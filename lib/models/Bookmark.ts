import { Schema, model, models } from "mongoose";

const BookmarkSchema = new Schema({
  userId: { type: String, required: true }, // Clerk User ID
  resourceId: { type: Schema.Types.ObjectId, ref: "Resource", required: true },
  savedAt: { type: Date, default: Date.now },
});

const Bookmark = models.Bookmark || model("Bookmark", BookmarkSchema);
export default Bookmark;