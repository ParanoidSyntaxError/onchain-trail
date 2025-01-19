import Image from "next/image";
import HealthBar from "./health-bar";
import { AspectRatio } from "./ui/aspect-ratio";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MedicineCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    health: number;
}

export default function MedicineCard({
    name,
    health,
    ...props
}: MedicineCardProps) {
    return (
        <div
            className={cn(
                "max-w-64 flex flex-col items-center justify-center border-4 border-white hover:bg-gray-500 cursor-pointer space-y-4 p-4",
                props.className
            )}
        >
            <div
                className="relative w-24"
            >
                <AspectRatio
                    ratio={1 / 1}
                >
                    <Image
                        src="/portrait.png"
                        alt="portrait"
                        fill
                        style={{
                            imageRendering: "pixelated",
                        }}
                    />
                </AspectRatio>
            </div>
            <div
                className="text-xl text-center"
            >
                {name}
            </div>
            <HealthBar 
                value={health}
            />
        </div>
    );
}