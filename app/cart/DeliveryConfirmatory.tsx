"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialogModified";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFetchUsers } from "../context/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrder } from "../context/OrderContext";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required").optional(),
  city: z.string(),
  address: z.string(),
  country: z.string(),
  _id: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function DeliveryConfirmatory() {
  const { orders, totalPrice } = useOrder();
  const { user } = useUser();
  const { users, current } = useFetchUsers();

  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const address = {
    _id: current?._id,
    name: current?.name,
    email: current?.email,
    country: current?.country,
    city: current?.city,
    address: current?.address,
  };
  const item = orders.map(({ image, ...rest }) => rest);

  const onSubmitForm: SubmitHandler<FormValues> = async (data) => {
    console.log(item);
    try {
      const ordersDetails = {
        items: item,
        address,
        totalAmount: totalPrice,
      };

      const headerAuth = {
        Authorization:
          "Bearer sk_test_51Pc94CCvj25n1SVem04vih54JceXmpjdD082Q0b0r82teXzVN2IgWfsuSGjFHdrEb2915MlljPfhG9jG4oxk6oml009dflPvGy",

        "Content-Type": "application/json",
      };
      const url = "http://127.0.0.1:3003";

      const response = await axios.post(
        `${url}/api/orders/place`,
        ordersDetails,
        {
          headers: headerAuth,
        }
      );

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios error:",
          error.response?.status,
          error.response?.data
        );
      } else {
        console.error("Unexpected error:", error);
      }
      alert("Error placing order. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Card className="flex justify-center py-[6px] px-4 mt-4 w-full text-[13px] font-normal text-slate-200 bg-orange-500 rounded-sm">
          PROCEED TO CHECKOUT
        </Card>
      </DialogTrigger>
      <DialogContent className=" px-16 py-10">
        <DialogHeader className=" mb-4">
          <DialogTitle className="pb-1 tracking-[0.3px]">
            Confirm Delivery Details
          </DialogTitle>
          <DialogDescription>
            View and change you profile information here
          </DialogDescription>
        </DialogHeader>
        <div>
          <form
            className="flex flex-col gap-1"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <Label className="text-[13px] font-semibold text-black/85">
              Name
            </Label>
            <Input
              className="h-8 mb-2 focus:outline-dashed bg-slate-200/65"
              type="text"
              id="name"
              defaultValue={current?.name}
              {...register("name")}
            />
            <Label className="text-[13px] font-semibold text-black/85">
              Email
            </Label>
            <Input
              type="text"
              id="email"
              defaultValue={current?.email}
              className="h-8 mb-2 bg-slate-200/65"
              {...register("email")}
            />
            <div className="flex gap-2">
              <span className="flex flex-col gap-2">
                <Label className="text-[13px] font-semibold text-black/85">
                  Address
                </Label>
                <Input
                  type="text"
                  id="address"
                  defaultValue={current?.address}
                  {...register("address")}
                  className="h-8 bg-slate-200/65"
                />
              </span>
              <span className="flex flex-col gap-2">
                <Label className="text-[13px] font-semibold text-black/85">
                  City
                </Label>
                <Input
                  type="text"
                  id="city"
                  defaultValue={current?.city}
                  {...register("city")}
                  className="h-8 bg-slate-200/65"
                />
              </span>
              <span className="flex flex-col gap-2">
                <Label className="text-[13px] font-semibold text-black/85">
                  Country
                </Label>
                <Input
                  type="text"
                  id="country"
                  defaultValue={current?.country}
                  {...register("country")}
                  className="h-8 bg-slate-200/65"
                />
                <Input
                  type="hidden"
                  id="_id"
                  defaultValue={current?._id}
                  {...register("_id")}
                  className="h-8 bg-slate-200/65"
                />
              </span>
            </div>
            <Button
              role="submit"
              className="flex justify-center py-[6px] px-4 mt-4  text-[14px] font-normal text-slate-200 bg-orange-500 hover:bg-orange-600 rounded-sm"
            >
              Continue to Payment
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
