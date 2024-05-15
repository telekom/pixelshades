"use client"

import { Button } from "@pixelshades/ui/components"
import { MoonIcon, SunIcon } from "@pixelshades/ui/icons"
import { useTheme } from "~/provider/theme-provider"

function ThemeSwitch() {
	const { computedTheme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(computedTheme === "light" ? "dark" : "light")
	}

	console.log(computedTheme)

	return (
		<Button size="xs-icon" variant="ghost" onPress={toggleTheme}>
			{computedTheme === "light" && <SunIcon />}
			{computedTheme === "dark" && <MoonIcon />}
		</Button>
	)
}

export default ThemeSwitch
