import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);
    if (req.method !== "PATCH") {
      return res
        .status(405)
        .json({ error: "Method not allowed, only PATCH is allowed." });
    }

    // 1.Update the database for title, date, description for the specific ID box that is clicked

    const data = req.body;
    const created = data.created;
    const category = data.category;
    const value = data.value;
    const id = data.id as string;
    const title = data.title as string;
    const description = data.description as string;

    let errorMessage = " ";
    let isValid = true;

    if (id === undefined) {
      return res.status(400).json({ error: "DID NOT PASS ID" });
    }
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
    //2. update database for title, date, description

    const client = await clientPromise;
    const myDB = client.db("budget");
    const myColl = myDB.collection("expenses");
    const arrayLists = await myColl.find({}).toArray();
    let isValidId = false;
    for (const todo of arrayLists) {
      console.log(todo._id, id);
      if (todo._id.toString() === id) {
        isValidId = true;
      }
    }
    if (isValidId === false) {
      return res.status(404).json({ error: "Not valid ID in database" });
    }
    const result = await myColl.updateMany(
      { _id: new ObjectId(id) },
      {
        $set: {
          title: title,
          category: category,
          value: value,
          created: created,
          description: description,
        },
      }
    );
    console.log("Inserted", result);

    // 4. Return the it has been created successfully.
    return res.status(200).json({ status: "success", is: result });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: JSON.stringify(e) });
  }
}
