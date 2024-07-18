// import { ManagementClient } from "auth0";

// const auth0Client = new ManagementClient({
//   domain: process.env.AUTH0_DOMAIN!,
//   clientId: process.env.AUTH0_CLIENT_ID!,
//   clientSecret: process.env.AUTH0_CLIENT_SECRET!,
// });

// async function createUser(email: string, password: string): Promise<any> {
//   try {
//     const user = await auth0Client.createUser({
//       email,
//       password,
//       connection: "Username-Password-Authentication", // Specify the connection type
//     });

//     return user;
//   } catch (error) {
//     throw new Error(`Failed to create user: ${error.message}`);
//   }
// }

// export { auth0Client, createUser };
