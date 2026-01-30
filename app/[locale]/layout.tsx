import * as React from "react";
import {notFound} from "next/navigation";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";

import {AppShell} from "@/components/app-shell";
import {routing} from "@/i18n/routing";

type LocaleLayoutProps = {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
    }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
    const {locale} = await params;

    const typedLocale = routing.locales.find((value) => value === locale);

    if (!typedLocale) {
        notFound();
    }

    setRequestLocale(typedLocale);
    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={typedLocale} messages={messages}>
            <AppShell>{children}</AppShell>
        </NextIntlClientProvider>
    );
}
