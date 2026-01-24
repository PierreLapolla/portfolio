// components/section-stack.tsx
import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type SectionStackProps = {
    children: React.ReactNode;
    className?: string;
    separatorClassName?: string;
};

export function SectionStack({
                                 children,
                                 className,
                                 separatorClassName,
                             }: SectionStackProps) {
    const items = React.Children.toArray(children).filter(Boolean);

    return (
        <div className={cn("py-10 sm:py-14", className)}>
            {items.map((child, i) => (
                <React.Fragment key={i}>
                    {i > 0 ? <Separator className={cn("my-10 sm:my-14", separatorClassName)} /> : null}
                    {child}
                </React.Fragment>
            ))}
        </div>
    );
}
