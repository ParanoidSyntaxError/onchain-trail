"use client";

import IconButton from "@/components/icon-button";
import PartyHealth from "@/components/party-health";
import RestTimer from "@/components/rest-timer";
import SuppliesList from "@/components/supplies-list";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RestPage() {
    const maxRestHours = 11;
    const [restHours, setRestHours] = useState(0);

    function increaseRestHours() {
        if (restHours >= 11) {
            return;
        }

        setRestHours(restHours + 1);
    }

    function decreaseRestHours() {
        if (restHours <= 0) {
            return;
        }

        setRestHours(restHours - 1);
    }

    return (
        <div
            className="p-4"
        >
            <PartyHealth/>
            <SuppliesList
                className="mt-10 mx-auto"
                exclusions={[
                    "fuel",
                    "battery",
                    "medicine",
                    "ammo"
                ]}
            />
            <div
                className="text-2xl mt-8"
            >
                How long will you rest? {(restHours + 1).toString()} hour{restHours + 1 > 1 ? "s" : ""}
            </div>
            <div
                className="flex flex-row items-center justify-center space-x-4 mt-8"
            >
                <IconButton
                    Icon={MinusIcon}
                    onClick={decreaseRestHours}
                />
                <RestTimer
                    value={restHours}
                    maxValue={maxRestHours + 1}
                />
                <IconButton
                    Icon={PlusIcon}
                    onClick={increaseRestHours}
                />
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