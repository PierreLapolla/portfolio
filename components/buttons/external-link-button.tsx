import type {ReactNode} from "react";
import * as React from "react";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {LuExternalLink} from "react-icons/lu";
import {SiGithub, SiLinkedin} from "react-icons/si";
import type {VariantProps} from "class-variance-authority";

type IconConfig = {
    component: ReactNode;
};

type IconRegistry = {
    [key: string]: IconConfig;
};

const defaultIconRegistry: IconRegistry = {
    github: {
        component: <SiGithub className="h-4 w-4" />,
    },
    linkedin: {
        component: <SiLinkedin className="h-4 w-4" />,
    },
    default: {
        component: <LuExternalLink className="h-4 w-4" />,
    },
};

interface ExternalLinkButtonProps
    extends React.ComponentProps<"button">,
        VariantProps<typeof buttonVariants> {
    href: string;
    iconRegistry?: IconRegistry;
    showText?: boolean;
    children?: ReactNode;
}

function getIconForUrl(url: string, iconRegistry: IconRegistry) {
    if (url.includes("github.com")) {
        return iconRegistry.github?.component || iconRegistry.default.component;
    }

    if (url.includes("linkedin.com")) {
        return iconRegistry.linkedin?.component || iconRegistry.default.component;
    }

    return iconRegistry.default.component;
}

export function ExternalLinkButton({
    href,
    iconRegistry = defaultIconRegistry,
    showText = false,
    children,
    variant = "default",
    size = "default",
    ...props
}: ExternalLinkButtonProps) {
    const icon = getIconForUrl(href, iconRegistry);

    return (
        <Button
            asChild
            variant={variant}
            size={size}
            {...props}
        >
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
            >
                {icon}
                {showText && children}
            </Link>
        </Button>
    );
}
