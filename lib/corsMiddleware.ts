// // lib/corsMiddleware.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import Cors from "cors";

// // Initializing the cors middleware
// const cors = Cors({
//   methods: ["GET", "POST", "HEAD"],
//   origin: "http://localhost:3000", // Allow requests from this origin
// });

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }

// export default async function corsMiddleware(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: any
// ) {
//   // Run the middleware
//   await runMiddleware(req, res, cors);
//   // Continue to the next middleware or handler
//   return fn(req, res);
// }
