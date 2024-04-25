import { Switch } from "@pixelshades/ui/components"
import { useEffect, useState } from "react"

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ")
}

function ThemeSwitch() {
	const [theme, setTheme] = useState("light")

	useEffect(() => {
		document.documentElement.classList.remove("light", "dark")
		document.documentElement.classList.add(theme)
	}, [theme])

	const [enabled, setEnabled] = useState(theme === "light")

	const handleThemeChange = (enabled: boolean) => {
		setTheme(enabled ? "light" : "dark")
		setEnabled(enabled)
	}

	return <Switch selected={enabled} onChange={handleThemeChange} />
}

export default ThemeSwitch
