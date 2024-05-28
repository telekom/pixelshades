const baseColors = ["primary", "destructive", "info", "success", "warning", "neutral"]

const getColorTokens = (color: string) => {
	return {
		[`--${color}-solid`]: `var(--${color}-scale-600)`,
		[`--${color}-solid-hover`]: `var(--${color}-scale-900)`,
		[`--${color}-solid-active`]: `var(--${color}-scale-950)`,
		[`--${color}-solid-disabled`]: `var(--${color}-neutral-200)`,

		[`--${color}-solid-foreground`]: `var(--${color}-contrast)`,
		[`--${color}-solid-foreground-hover`]: `var(--${color}-contrast)`,
		[`--${color}-solid-foreground-active`]: `var(--${color}-neutral-100)`,
		[`--${color}-solid-foreground-disabled`]: `var(--${color}-neutral-400)`,

		[`--${color}-body`]: `var(--${color}-contrast)`,
		[`--${color}-body-hover`]: `var(--${color}-scale-100)`,
		[`--${color}-body-active`]: `var(--${color}-contrast)`,
		[`--${color}-body-disabled`]: "var(--neutral-scale-50)",

		[`--${color}-body-foreground`]: `var(--${color}-scale-600)`,
		[`--${color}-body-foreground-hover`]: `var(--${color}-scale-900)`,
		[`--${color}-body-foreground-active`]: `var(--${color}-scale-600)`,
		[`--${color}-body-foreground-disabled`]: "var(--neutral-scale-400)",

		[`--${color}-subtle`]: `var(--${color}-scale-50)`,
		[`--${color}-subtle-hover`]: `var(--${color}-scale-100)`,
		[`--${color}-subtle-active`]: `var(--${color}-scale-200)`,
		[`--${color}-subtle-disabled`]: "var(--neutral-scale-200)",

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
	const colors = Object.assign({}, ...baseColors.map(getColorTokens))

	return {
		":root": {
			"--background": "var(--neutral-contrast)",
			"--background-hover": "var(--neutral-100)",
			"--background-active": "var(--neutral-200)",

			"--subtle-background": "var(--neutral-scale-50)",
			"--subtle-foreground": "var(--neutral-scale-600)",
			"--subtle-foreground-disabled": "var(--neutral-scale-400)",

			"--foreground": "var(--neutral-scale-900)",
			"--ring": "var(--primary)",
			"--radius": "0.5rem",

			"--border": "var(--neutral-scale-300)",

			/* Primary Colors */

			...colors,
		},
	}
}
