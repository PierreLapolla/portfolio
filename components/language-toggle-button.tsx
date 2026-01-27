"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {FR, GB} from "country-flag-icons/react/3x2"

export function LanguageToggleButton() {

    const toggleLanguage = () => {

    }

    const iconBase = "h-[1em] w-[1em] transition-all"

    return (
        <Button
            disabled={true} // temporary, waiting for implementation
            size="icon"
            onClick={toggleLanguage}
        >
            <GB className={iconBase}/>
        </Button>
    )
}
