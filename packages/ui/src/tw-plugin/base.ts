import { baseColors, defaultColorTokens, defaultDarkModeColorTokens } from "./const"

const getUtilTokens = () => {
	return {
		"--radius": "0.5rem",
	}
}

const getLayoutTokens = () => {
	return {
		"--spacing-xs": "0.125rem",
		"--spacing-sm": "0.25rem",
		"--spacing-md": "0.5rem",
		"--spacing-lg": "1rem",
		"--spacing-xl": "1.5rem",

		"--spacing-layout-xs": "1rem",
		"--spacing-layout-sm": "1.5rem",
		"--spacing-layout-md": "2rem",
		"--spacing-layout-lg": "3rem",
		"--spacing-layout-xl": "4rem",
		"--spacing-layout-2xl": "6rem",
	}
}

const getColorTokens = (color: string) => {
	return {
		[`--${color}-solid`]: `var(--${color}-scale-600)`,
		[`--${color}-solid-hover`]: `var(--${color}-scale-700)`,
		[`--${color}-solid-active`]: `var(--${color}-scale-950)`,
		[`--${color}-solid-disabled`]: "var(--neutral-scale-200)",

		[`--${color}-solid-foreground`]: `var(--${color}-contrast)`,
		[`--${color}-solid-foreground-hover`]: `var(--${color}-contrast)`,
		[`--${color}-solid-foreground-active`]: `var(--${color}-contrast)`,
		[`--${color}-solid-foreground-disabled`]: "var(--neutral-scale-400)",

		[`--${color}-background`]: `var(--${color}-scale-50)`,
		[`--${color}-background-hover`]: `var(--${color}-scale-100)`,
		[`--${color}-background-active`]: `var(--${color}-scale-100)`,
		[`--${color}-background-disabled`]: "var(--neutral-scale-50)",

		[`--${color}-background-foreground`]: `var(--${color}-scale-600)`,
		[`--${color}-background-foreground-hover`]: `var(--${color}-scale-900)`,
		[`--${color}-background-foreground-active`]: `var(--${color}-scale-600)`,
		[`--${color}-background-foreground-disabled`]: "var(--neutral-scale-400)",

		[`--${color}-subtle`]: `var(--${color}-scale-100)`,
		[`--${color}-subtle-hover`]: `var(--${color}-scale-200)`,
		[`--${color}-subtle-active`]: `var(--${color}-scale-200)`,
		[`--${color}-subtle-disabled`]: "var(--neutral-scale-50)",

		[`--${color}-subtle-foreground`]: `var(--${color}-scale-700)`,
		[`--${color}-subtle-foreground-hover`]: `var(--${color}-scale-800)`,
		[`--${color}-subtle-foreground-active`]: `var(--${color}-scale-800)`,
		[`--${color}-subtle-foreground-disabled`]: "var(--neutral-scale-400)",

		[`--${color}-border`]: `var(--${color}-scale-600)`,
		[`--${color}-border-hover`]: `var(--${color}-scale-800)`,
		[`--${color}-border-active`]: `var(--${color}-scale-900)`,
		[`--${color}-border-disabled`]: "var(--neutral-scale-300)",
	}
}

export const getBaseColors = () => {
	const colors = baseColors.reduce(
		(acc, color) => ({
			// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
			...acc,
			...getColorTokens(color),
		}),
		{},
	)

	return {
		html: {
			color: "hsl(var(--foreground))",
			backgroundColor: "hsl(var(--background))",
		},
		":root": {
			"--background": "var(--neutral-scale-50)",
			"--background-hover": "var(--neutral-scale-100)",
			"--background-active": "var(--neutral-scale-200)",

			"--subtle-background": "var(--neutral-scale-100)",
			"--subtle-foreground": "var(--neutral-scale-600)",
			"--subtle-foreground-disabled": "var(--neutral-scale-400)",

			"--foreground": "var(--neutral-scale-900)",
			"--ring": "var(--primary--scale-600)",

			"--border": "var(--neutral-scale-300)",

			...colors,

			...getLayoutTokens(),
			...getUtilTokens(),

			...defaultColorTokens,
		},

		".dark": {
			...defaultDarkModeColorTokens,
		},
	}
}
