// components/page-container.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export function PageContainer({
                                  className,
                                  ...props
                              }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("mx-auto w-full max-w-5xl px-4", className)}
            {...props}
        />
    );
}
