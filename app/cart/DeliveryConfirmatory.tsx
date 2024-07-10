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

export default function DeliveryConfirmatory() {
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
          <form className="flex flex-col gap-1">
            <Label className="text-[13px] font-semibold text-black/85">
              Name
            </Label>
            <Input
              type="text"
              className="h-8 mb-2 focus:outline-dashed bg-slate-200/65"
            />
            <Label className="text-[13px] font-semibold text-black/85">
              Email
            </Label>
            <Input type="text" className="h-8 mb-2 bg-slate-200/65" />
            <div className="flex gap-2">
              <span className="flex flex-col gap-2">
                <Label className="text-[13px] font-semibold text-black/85">
                  Address
                </Label>
                <Input type="text" className="h-8 bg-slate-200/65" />
              </span>
              <span className="flex flex-col gap-2">
                <Label className="text-[13px] font-semibold text-black/85">
                  City
                </Label>
                <Input type="text" className="h-8 bg-slate-200/65" />
              </span>
              <span className="flex flex-col gap-2">
                <Label className="text-[13px] font-semibold text-black/85">
                  Country
                </Label>
                <Input type="text" className="h-8 bg-slate-200/65" />
              </span>
            </div>
            <Button className="flex justify-center py-[6px] px-4 mt-4  text-[14px] font-normal text-slate-200 bg-orange-500 hover:bg-orange-600 rounded-sm">
              Continue to Payment
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
