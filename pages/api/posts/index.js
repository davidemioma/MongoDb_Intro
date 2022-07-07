import { connectToDatabase } from "../../../utils/mongodb";
import { Timestamp } from "mongodb";

export default async function handler(req, res) {
  const { method, body } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const posts = await db
        .collection("posts")
        .find()
        .sort({ timestamp: -1 })
        .toArray();

      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    const post = await db
      .collection("posts")
      .insertOne({ ...body, timestamp: new Timestamp() });

    res.status(200).json(post);
    try {
    } catch (err) {
      res.status(500).json(error);
    }
  }
}
