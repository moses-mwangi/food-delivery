"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  signIn: boolean;
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormValues = {
  email: string;
  name: string;
  password: string;
};

export default function SignForm({ signIn, setSignIn }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // const dat = JSON.stringify(data);
    // console.log(dat);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        <div className="mb-3">
          <Input
            type="text"
            placeholder="Your Email"
            className="h-8 placeholder:text-[13px] rounded-sm"
            {...register("email", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 font-medium text-[11px]">
              Email is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <Input
            type="text"
            placeholder="Your Name"
            className="h-8 placeholder:text-[13px] rounded-sm"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 font-medium text-[11px]">
              Name is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <Input
            type="password"
            placeholder="Your Password"
            className="h-8 placeholder:text-[13px] rounded-sm"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 font-medium text-[11px]">
              Password is required
            </span>
          )}
        </div>
        {signIn === true && (
          <span className="text-[14px] text-blue-800/80 font-medium cursor-pointer">
            Forgot Password
          </span>
        )}
        <Button className="flex justify-center mb-2 py-[6px] h-8 px-4 mt-4  text-[14px] font-medium text-slate-200 bg-orange-500 hover:bg-orange-600 rounded-sm">
          {signIn ? "Login" : "Create account"}
        </Button>
        <div className="flex gap-2 mb-6">
          <Input type="checkbox" required className="w-3 h-3 mt-1" />
          <p className="text-[13px] text-muted-foreground flex items-start">
            I agree to the terms and conditions of use and privacy policy.
          </p>
        </div>
        <p className="text-muted-foreground text-[14px]">
          {signIn ? "Create new account?" : "Already have an account? Log in"}
          <span
            className="text-[14px] ml-2 text-orange-600 hover:text-orange-700 cursor-pointer"
            onClick={() => setSignIn((sign) => !sign)}
          >
            Click here
          </span>
        </p>
      </form>
    </div>
  );
}
