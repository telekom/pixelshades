import { useEffect, useState } from "react"

const breakpoints = ["3xl", "2xl", "xl", "lg", "md", "sm", "xs"] as const

export type ScreenSize = Partial<(typeof breakpoints)[keyof typeof breakpoints]>

const getBreakpoints = () => {
	const bp = breakpoints.map((breakpoint) => ({
		value: getComputedStyle(document.documentElement).getPropertyValue(`--breakpoint-${breakpoint}`),
		key: breakpoint,
	}))

	return bp
}

export const useCurrentBreakpoint = () => {
	const [currentBreakpoint, setCurrentBreakpoint] = useState<(typeof breakpoints)[number] | null>(null)

	useEffect(() => {
		const breakpoints = getBreakpoints()

		const handleResize = () => {
			const currentBreakpoint = breakpoints.find(
				(breakpoint) => Number.parseInt(breakpoint.value) <= window.innerWidth,
			)

			if (currentBreakpoint) {
				setCurrentBreakpoint(currentBreakpoint.key)
			}
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return currentBreakpoint
}
