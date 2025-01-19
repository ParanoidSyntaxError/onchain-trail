import { HTMLAttributes } from "react";
import HealthBar from "./health-bar";
import { cn } from "@/lib/utils";
import { demoParty } from "@/lib/demo-data";

export interface PartyMember {
    label: string;
    health: number;
}

interface PartyHealthProps extends HTMLAttributes<HTMLDivElement> {
    party?: PartyMember[];
}

export default function PartyHealth({
    party = demoParty,
    ...props
}: PartyHealthProps) {
    return (
        <div
            {...props}
            className={cn(
                "space-y-2",
                props.className
            )}
        >
            {party.map((member, i) => {
                return (
                    <div
                        key={i}
                        className="flex flex-row items-center space-x-2"
                    >
                        <div
                            className="w-64 border-2 border-transparent hover:border-white cursor-pointer"
                        >
                            {member.label}
                        </div>
                        <HealthBar
                            value={member.health}
                        />
                    </div>
                )
            })}
        </div>
    );
}