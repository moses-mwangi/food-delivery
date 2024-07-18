// "use client";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import axios from "axios";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// interface Props {
//   signIn: boolean;
//   setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const formSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   name: z.string().min(1, "Name is required").optional(),
//   password: z.string().min(8, "Password must be at least 8 characters"),
//   passwordConfirm: z.string().min(8, "Password must be at least 8 characters"),
// });

// type FormValues = z.infer<typeof formSchema>;

// const storeTokenInLocalStorage = (token: string) => {
//   localStorage.setItem("token", token);
// };

// export default function SignForm({ signIn, setSignIn }: Props) {
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit: SubmitHandler<FormValues> = async (data) => {
//     try {
//       const url = signIn ? "/api/auth/signin" : "/api/auth/login";
//       const response = await axios.post(url, data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });

//       const { token } = response.data;

//       storeTokenInLocalStorage(token);

//       router.push("/");
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         console.error(error.response.data); // Handle the error response from backend
//       } else {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
//         <div className="mb-3">
//           <Input
//             type="text"
//             placeholder="Your Email"
//             className="h-8 placeholder:text-[13px] rounded-sm"
//             {...register("email")}
//           />
//           {errors.email && (
//             <span className="text-red-500 font-medium text-[11px]">
//               {errors.email.message}
//             </span>
//           )}
//         </div>
//         {signIn && (
//           <div className="mb-3">
//             <Input
//               type="text"
//               placeholder="Your Name"
//               className="h-8 placeholder:text-[13px] rounded-sm"
//               {...register("name")}
//             />
//             {errors.name && (
//               <span className="text-red-500 font-medium text-[11px]">
//                 {errors.name.message}
//               </span>
//             )}
//           </div>
//         )}
//         <div className="mb-3">
//           <Input
//             type="password"
//             placeholder="Your Password"
//             className="h-8 placeholder:text-[13px] rounded-sm"
//             {...register("password")}
//           />
//           {errors.password && (
//             <span className="text-red-500 font-medium text-[11px]">
//               {errors.password.message}
//             </span>
//           )}
//         </div>
//         <div className="mb-3">
//           <Input
//             type="password"
//             placeholder="Password Confirm"
//             className="h-8 placeholder:text-[13px] rounded-sm"
//             {...register("passwordConfirm")}
//           />
//           {errors.passwordConfirm && (
//             <span className="text-red-500 font-medium text-[11px]">
//               {errors.passwordConfirm.message}
//             </span>
//           )}
//         </div>
//         {!signIn && (
//           <span className="text-[14px] text-blue-800/80 font-medium cursor-pointer">
//             Forgot Password
//           </span>
//         )}
//         <Button className="flex justify-center mb-2 py-[6px] h-8 px-4 mt-4 text-[14px] font-medium text-slate-200 bg-orange-500 hover:bg-orange-600 rounded-sm">
//           {signIn ? "Login" : "Create account"}
//         </Button>
//         <div className="flex gap-2 mb-6">
//           <Input type="checkbox" required className="w-3 h-3 mt-1" />
//           <p className="text-[13px] text-muted-foreground flex items-start">
//             I agree to the terms and conditions of use and privacy policy.
//           </p>
//         </div>
//         <p className="text-muted-foreground text-[14px]">
//           {!signIn ? "Create new account?" : "Already have an account? Log in"}
//           <span
//             className="text-[14px] ml-2 text-orange-600 hover:text-orange-700 cursor-pointer"
//             onClick={() => setSignIn((sign) => !sign)}
//           >
//             Click here
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }
