import { demoSupplies } from "@/lib/demo-data";
import { cn, toTitleCase } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type SupplyType = (
    "fuel" |
    "battery" |
    "medicine" | 
    "food" | 
    "water" |
    "ammo"
);

interface SuppliesListProps extends HTMLAttributes<HTMLDivElement> {
    supplies?: Map<SupplyType, number>;
    exclusions?: SupplyType[];
}

export default function SuppliesList({
    supplies = demoSupplies,
    exclusions = [],
    ...props
}: SuppliesListProps) {
    return (
        <div
            {...props}
            className={cn(
                "max-w-80 space-y-2",
                props.className
            )}
        >
            {[...supplies.entries()].map(([key, value], i) => {
                if(exclusions.includes(key)) {
                    return;
                }

                return (
                    <div
                        key={i}
                        className="flex flex-row justify-between font-bold text-xl"
                    >
                        <div>
                            {toTitleCase(key.toString())}
                        </div>
                        <div>
                            {value}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}