// import corsMiddleware from "@/lib/corsMiddleware";
// import clientPromise from "@/lib/mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

// export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     try {
//       await corsMiddleware(req, res, async () => {
//         const client = await clientPromise;
//         const db = client.db("delivery");
//         const users = await db.collection("users").find({}).toArray();

//         res.status(200).json(users);
//       });
//     } catch (error) {
//       res.status(500).json({ error: "Unable to fetch users" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// /*export async function createUser(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     try {
//       await corsMiddleware(req, res, async () => {
//         const client = await clientPromise;
//         const db = client.db("delivery");
//         const newUser = req.body;

//         const result = await db.collection("users").insertOne(newUser);

//         res.status(201).json(result.ops[0]);
//       });
//     } catch (error) {
//       res.status(500).json({ error: "Unable to create user" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }*/
