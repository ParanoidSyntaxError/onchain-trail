import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react";

interface HealthBarProps extends HTMLAttributes<HTMLDivElement> {
    value?: number
    maxValue?: number
}

export default function HealthBar({
    value = 100,
    maxValue = 100,
    ...props
}: HealthBarProps) {
    const percentage = (value / maxValue) * 100;

    return (
        <div
            {...props}
            className={cn(
                "relative w-full h-8 border-2 border-white",
                props.className
            )}
        >
            <div
                className="absolute inset-0 bg-[#2FD41B]"
                style={{
                    width: `${percentage}%`
                }}
            />
        </div>
    )
}