import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ error: "Method not allowed, only POST is allowed." });
    }

    // Write the actual logic

    // 1. Extract the todo data from the request.
    const data = req.body;
    console.log(data);
    const title = data.title;
    const value = data.value;
    const description = data.description;
    const category = data.category;
    const email = data.email;
    let isValid = true;
    let errorMessage = "";
    // 2. Validate the todo data. (make sure all required things are there
    if (title === undefined || title?.trim()?.length === 0) {
      isValid = false;
      errorMessage += " bad title";
    }
    if (description === undefined || description?.trim()?.length === 0) {
      isValid = false;
      console.log("reached");
      errorMessage += " bad description";
    }
    if (!isValid) {
      return res.status(400).json({ error: errorMessage });
    }
    //    Return an error if the data is invalid.

    // 3. Add a new todo with this data into the database (MongoDB).

    const client = await clientPromise;
    const myDB = client.db("budget");
    const myColl = myDB.collection("expenses");
    const doc = {
      created_at: new Date(),
      title,
      value,
      description,
      category,
      is_complete: false,
      email: email,
    };
    const result = await myColl.insertOne(doc);
    console.log("Inserted", result);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    // 4. Return the it has been created successfully.
    return res.status(200).json({ status: "success", result: result });
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({ error: JSON.stringify(e.message) });
  }
}
