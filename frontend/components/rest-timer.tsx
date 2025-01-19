import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface RestTimerProps extends HTMLAttributes<HTMLElement> {
    value?: number;
    maxValue?: number;
}

export default function RestTimer({
    value = 0,
    maxValue = 10,
    ...props
}: RestTimerProps) {
    return (
        <div
            {...props}
            className={cn(
                "h-8 w-full",
                props.className
            )}
        >
            <div className="relative h-full w-full">
                <div className="absolute inset-0 flex justify-evenly">
                    {Array.from({ length: maxValue }, (_, i) => (
                        <div
                            key={i}
                            className="flex w-5 items-center justify-center"
                        >
                            <div
                                className={cn(
                                    value === i ? "w-full h-full bg-white" : "w-[0.125rem] h-3/4 bg-gray-500"
                                )}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}