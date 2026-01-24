"use client"

import * as React from "react"
import {Languages} from "lucide-react"
import {Button} from "@/components/ui/button"

export function LanguageToggleButton() {

    const toggleLanguage = () => {

    }

    const iconBase = "h-[1em] w-[1em] transition-all"

    return (
        <Button size="icon" onClick={toggleLanguage}>
            <Languages className={iconBase}/>
        </Button>
    )
}
