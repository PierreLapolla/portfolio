import {cn} from "@/lib/utils";
import React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
    container?: boolean;
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({className, container = true, children, ...props}, ref) => (
        <section ref={ref} className={cn("section", className)} {...props}>
            {container ? <div className="page-container">{children}</div> : children}
        </section>
    )
);
Section.displayName = "Section";

type SectionHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
};

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
    ({className, title, description, children, ...props}, ref) => (
        <div ref={ref} className={cn("section-header", className)} {...props}>
            {title ? <h2 className="section-title">{title}</h2> : null}
            {description ? (
                <p className="section-description">{description}</p>
            ) : null}
            {children}
        </div>
    )
);
SectionHeader.displayName = "SectionHeader";

const SectionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div ref={ref} className={cn("section-content", className)} {...props} />
    )
);
SectionContent.displayName = "SectionContent";

export {Section, SectionHeader, SectionContent};
