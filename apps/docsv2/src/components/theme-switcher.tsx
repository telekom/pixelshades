"use client"

import { Button } from "@pixelshades/ui/components"
import { IconMoonStars, IconSun } from "@pixelshades/ui/icons"
import { useTheme } from "~/provider/theme-provider"

export function ThemeSwitch() {
	const { computedTheme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(computedTheme === "light" ? "dark" : "light")
	}

	return (
		<Button size="xs-icon" variant="ghost" onPress={toggleTheme}>
			{computedTheme === "light" && <IconSun />}
			{computedTheme === "dark" && <IconMoonStars />}
		</Button>
	)
}
