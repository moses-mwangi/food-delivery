// "use client";

// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// // import SignForm from "./SignForm";
// import UserProfile from "./UserProfile";
// import { useUser } from "../context/UserContext";
// import { Card } from "@/components/ui/card";

// export default function SignIn() {
//   const [signIn, setSignIn] = useState(false);
//   const { user } = useUser();

//   if (user) return <UserProfile />;

//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger>
//           <Card className="flex items-center rounded-3xl px-5 py-[7px] cursor-pointer text-gray-500 hover:text-globalColor hover:bg-slate-50 transition-all duration-200">
//             signIn
//           </Card>
//         </DialogTrigger>
//         <DialogContent className="py-10">
//           <DialogHeader>
//             <DialogTitle className="text-black/90 mb-6">
//               <div className="flex flex-col  gap-2 items-center">
//                 <p className="text-3xl font-semibold text-orange-600">
//                   Tomato.
//                 </p>
//                 {signIn ? "Sign Up" : "Login"}
//               </div>
//             </DialogTitle>
//             <DialogDescription></DialogDescription>
//           </DialogHeader>
//           <SignForm signIn={signIn} setSignIn={setSignIn} />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
