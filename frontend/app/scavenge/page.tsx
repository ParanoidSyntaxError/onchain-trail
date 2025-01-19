"use client";

import IconButton from "@/components/icon-button";
import { ResourceBar } from "@/components/resource-bar";
import { SupplyType } from "@/components/supplies-list";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { MinusIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    fuel: z.number().min(0),
    battery: z.number().min(0),
    medicine: z.number().min(0),
    food: z.number().min(0),
    water: z.number().min(0),
    ammo: z.number().min(0),
});

export default function ScavengePage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fuel: 0,
            battery: 0,
            medicine: 0,
            food: 0,
            water: 0,
            ammo: 0,
        },
        mode: "all",
    });
    form.watch();

    const maxRemainingHours = 8;
    const [remainingHours, setRemainingHours] = useState<number>(maxRemainingHours);

    function increaseResource(resource: SupplyType) {
        if (remainingHours <= 0) {
            return;
        }

        const value: number | undefined = form.getValues(resource);
        if (value !== undefined) {
            form.setValue(resource, value + 1);
        }

        setRemainingHours(remainingHours - 1);
    }

    function decreaseResource(resource: SupplyType) {
        if (remainingHours >= maxRemainingHours) {
            return;
        }

        const value: number | undefined = form.getValues(resource);
        if (value !== undefined) {
            form.setValue(resource, value - 1);
        }

        setRemainingHours(remainingHours + 1);
    }

    return (
        <div
            className="p-4"
        >
            <div
                className="text-2xl mb-10"
            >
                Gather supplies. Hours remaining: {remainingHours.toString()}
            </div>
            <div
                className="space-y-8"
            >
                {formSchema.keyof().options.map((resource, i) => {
                    return (
                        <div
                        key={i}
                            className="space-y-2"
                        >
                            <div
                                className="text-3xl font-bold"
                            >
                                {resource.toUpperCase()}
                            </div>
                            <div
                                className="flex flex-row items-center justify-center space-x-8"
                            >
                                <IconButton
                                    Icon={MinusIcon}
                                    onClick={() => { decreaseResource(resource) }}
                                />
                                <ResourceBar
                                    value={form.getValues(resource)}
                                />
                                <IconButton
                                    Icon={PlusIcon}
                                    onClick={() => { increaseResource(resource) }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div
                className="flex flex-row w-fit space-x-16 mt-10 mx-auto"
            >
                <Link
                    href="/camp"
                >
                    <Button>
                        Back
                    </Button>
                </Link>
                <Button>
                    OK
                </Button>
            </div>
        </div >
    );
}