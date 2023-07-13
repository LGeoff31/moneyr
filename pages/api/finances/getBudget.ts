import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("about to make list request");
    if (req.method !== "GET") {
      return res
        .status(405)
        .json({ error: "Method not allowed, only GET is allowed." });
    }

    // Write the actual logic
    // 1. Extract the data from the database.
    const client = await clientPromise;
    const myDB = client.db("budget");
    const myColl = myDB.collection("finances");
    const budget = await myColl.find({}).toArray();

    // 2. Return the data.
    return res.status(200).json(budget);
    //List the TODO
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
