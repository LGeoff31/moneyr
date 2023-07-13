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

    const email = req.query.email;
    if (!email) {
      return res.status(401).json({ error: `Unauthorized email: ${email}` });
    }

    // Write the actual logic
    // 1. Extract the data from the database.
    console.log(1);
    const client = await clientPromise;
    console.log(2);
    const myDB = client.db("budget");
    console.log(3);
    const myColl = myDB.collection("expenses");
    console.log(4);
    let expenses = await myColl.find({}).toArray();
    expenses = expenses.filter((e) => e.email === email);

    // 2. Return the data.
    return res.status(200).json({ expenses: expenses });
    //List the TODO
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
