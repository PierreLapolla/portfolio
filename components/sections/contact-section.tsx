// components/sections/contact-section.tsx
import * as React from "react";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Section} from "@/components/section";

export function ContactSection() {
    return (
        <Section
            id="contact"
            title="Contact"
            description="Links and a simple call-to-action."
        >
            <Card>
                <CardContent className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                            Prefer email or LinkedIn. You can also ask the assistant for availability or focus areas.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Button asChild>
                            <Link href="https://fr.linkedin.com/in/pierrelapolla" target="_blank"
                                  rel="noopener noreferrer">
                                LinkedIn
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://github.com/PierreLapolla" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </Link>
                        </Button>
                    </div>

                    {/*TODO: add email copy button*/}
                </CardContent>
            </Card>
        </Section>
    );
}
