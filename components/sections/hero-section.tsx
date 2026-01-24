// components/sections/hero-section.tsx
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";

export function HeroSection() {
    return (
        <Section id="top" className="pt-10 sm:pt-14" contentClassName="space-y-6">
            <Card>
                <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Data / AI</Badge>
                            <Badge variant="secondary">Engineering</Badge>
                            <Badge variant="secondary">Consulting-ready</Badge>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                                Pierre Lapolla
                            </h1>
                            <p className="text-sm sm:text-base text-muted-foreground">
                                Portfolio + chatbot assistant. Skim the sections or ask the assistant for a summary.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button asChild>
                                <Link href="#chat">Ask the assistant</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#projects">View projects</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="#contact">Contact</Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Section>
    );
}
