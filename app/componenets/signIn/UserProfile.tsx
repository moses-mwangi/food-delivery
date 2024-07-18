// import React from "react";
// import { useUser } from "../context/UserContext";
// import Image from "next/image";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { LucideLogOut } from "lucide-react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { Skeleton } from "@/components/ui/skeleton";

// export default function UserProfile() {
//   const router = useRouter();
//   const { user, loading, error } = useUser();
//   const userRep = user?.name.split("").at(0)?.toUpperCase();
//   const avatar = user?.photo;

//   const logout = async () => {
//     try {
//       await axios.get("http://localhost:3003/api/users/logout");
//       localStorage.removeItem("token");
//       router.refresh();
//     } catch (error) {
//       console.error("Error logging out", error);
//     }
//   };

//   if (loading)
//     return (
//       <div>
//         <Skeleton className="w-9 h-9 rounded-full" />
//       </div>
//     );
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <DropdownMenu>
//         <DropdownMenuTrigger className="rounded-full border-pink-600 border-2 border-solid">
//           {user?.photo && (
//             <Image src={avatar!} alt="user" width={30} height={30} />
//           )}
//           {!user?.photo && (
//             <div className="bg-pink-600 p-2 text-slate-300 h-[30px] w-[30px] rounded-full flex items-center justify-center">
//               {userRep}
//             </div>
//           )}
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="px-4">
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuItem>
//             <span className="text-slate-600 font-medium">{user?.email}</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem
//             onClick={() => {
//               logout();
//             }}
//             className="flex gap-2 font-medium text-slate-700"
//           >
//             <LucideLogOut className="w-5 h-5" />
//             <span>Log out</span>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }
