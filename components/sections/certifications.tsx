import * as React from "react";
import Link from "next/link";
import {Section} from "@/components/section";
import {Button} from "@/components/ui/button";
import {LuExternalLink} from "react-icons/lu";
import {Card, CardContent} from "@/components/ui/card";

export function CertificationsSection() {
    return (
        <Section
            id="certifications"
            title="Certifications"
            description=""
        >
            <Card>
                <CardContent className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                            View and verify all my certifications and badges on Credly.
                        </p>
                    </div>

                        <Button
                            asChild
                            variant="outline"
                        >
                            <Link
                                href="https://www.credly.com/users/pierre-lapolla"
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-xl border bg-muted/30 p-5 transition hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                                View
                                <LuExternalLink className="h-4 w-4"/>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
        </Section>
    );
}
