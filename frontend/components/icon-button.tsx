import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { HTMLAttributes } from "react";

interface PlusButtonProps extends HTMLAttributes<HTMLButtonElement> {
    Icon: LucideIcon;
    size?: string;
}

export default function IconButton({
    Icon,
    size = "1.5rem",
    ...props
}: PlusButtonProps) {
    return (
        <Button
            {...props}
            size="icon"
            className={cn(
                "w-fit h-fit p-1 border-2",
                props.className
            )}
        >
            <Icon
                style={{
                    minWidth: size,
                    minHeight: size
                }}
            />
        </Button>
    );
}