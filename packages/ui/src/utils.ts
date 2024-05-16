const breakpoints = ["3xl", "2xl", "xl", "lg", "md", "sm", "xs"] as const

export type ScreenSize = Partial<(typeof breakpoints)[keyof typeof breakpoints]>

const getBreakpoints = () => {
	const bp = breakpoints.map((breakpoint) => ({
		value: getComputedStyle(document.documentElement).getPropertyValue(`--breakpoint-${breakpoint}`),
		name: breakpoint,
	}))

	return bp
}

export const getActiveBreakpoint = () => {
	const currentScrenSize = window.innerWidth
	const breakpoints = getBreakpoints()
	return breakpoints.find((breakpoint) => Number.parseInt(breakpoint.value) <= currentScrenSize)
}
