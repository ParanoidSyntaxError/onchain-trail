import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ResourceBarProps extends HTMLAttributes<HTMLElement> {
    value?: number;
    maxValue?: number;
}

export function ResourceBar({
    value = 0,
    maxValue = 10,
    ...props
}: ResourceBarProps) {
    return (
        <div
            {...props}
            className="w-full h-12 border-2"
        >
            <div
                className="flex-1 w-full h-full grid grid-cols-10"
            >
                {Array.from({ length: maxValue }).map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "border-white",
                            i < maxValue - 1 ? "border-r-2" : "",
                            i < value ? "bg-[#2FD41B]" : "",
                        )}
                    />
                ))}
            </div>
        </div>
    );
}