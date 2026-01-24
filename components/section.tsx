// components/section.tsx
import * as React from "react";
import {cn} from "@/lib/utils";
import {PageContainer} from "@/components/page-container";

type SectionProps = {
    id?: string;
    title?: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
};

export function Section({
                            id,
                            title,
                            description,
                            children,
                            className,
                            contentClassName,
                        }: SectionProps) {
    return (
        <section id={id} className={cn("scroll-mt-24", className)}>
            <PageContainer>
                {(title || description) && (
                    <header className="mb-6 sm:mb-8">
                        {title && (
                            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </header>
                )}

                <div className={cn("space-y-6", contentClassName)}>{children}</div>
            </PageContainer>
        </section>
    );
}
