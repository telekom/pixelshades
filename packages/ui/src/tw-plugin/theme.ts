import { baseColors } from "./const"

const getThemeColorToken = (color: string) => {
	return {
		[color]: {
			DEFAULT: `hsl(var(--${color}-solid))`,
			hover: `hsl(var(--${color}-solid-hover))`,
			active: `hsl(var(--${color}-solid-active))`,
			disabled: `hsl(var(--${color}-solid-disabled))`,

			foreground: `hsl(var(--${color}-solid-foreground))`,
			"foreground-hover": `hsl(var(--${color}-solid-foreground-hover))`,
			"foreground-active": `hsl(var(--${color}-solid-foreground-active))`,
			"foreground-disabled": `hsl(var(--${color}-solid-foreground-disabled))`,
		},
		[`${color}-background`]: {
			DEFAULT: `hsl(var(--${color}-background))`,
			hover: `hsl(var(--${color}-background-hover))`,
			active: `hsl(var(--${color}-background-active))`,
			disabled: `hsl(var(--${color}-background-disabled))`,

			foreground: `hsl(var(--${color}-background-foreground))`,
			"foreground-hover": `hsl(var(--${color}-background-foreground-hover))`,
			"foreground-active": `hsl(var(--${color}-background-foreground-active))`,
			"foreground-disabled": `hsl(var(--${color}-background-foreground-disabled))`,
		},
		[`${color}-subtle`]: {
			DEFAULT: `hsl(var(--${color}-subtle))`,
			hover: `hsl(var(--${color}-subtle-hover))`,
			active: `hsl(var(--${color}-subtle-active))`,
			disabled: `hsl(var(--${color}-subtle-disabled))`,

			foreground: `hsl(var(--${color}-subtle-foreground))`,
			"foreground-hover": `hsl(var(--${color}-subtle-foreground-hover))`,
			"foreground-active": `hsl(var(--${color}-subtle-foreground-active))`,
			"foreground-disabled": `hsl(var(--${color}-subtle-foreground-disabled))`,
		},
		[`${color}-border`]: {
			DEFAULT: `hsl(var(--${color}-border))`,
			hover: `hsl(var(--${color}-border-hover))`,
			active: `hsl(var(--${color}-border-active))`,
			disabled: `hsl(var(--${color}-border-disabled))`,
		},
	}
}

export const getThemeVariables = () => {
	const themeColors = baseColors.reduce(
		(acc, color) => ({
			// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
			...acc,
			...getThemeColorToken(color),
		}),
		{},
	)

	return {
		background: {
			DEFAULT: "hsl(var(--background))",
			hover: "hsl(var(--background-hover))",
			active: "hsl(var(--background-active))",
		},
		foreground: "hsl(var(--foreground))",
		ring: "hsl(var(--ring))",
		border: "hsl(var(--border))",
		subtle: {
			DEFAULT: "hsl(var(--subtle-background))",
			foreground: "hsl(var(--subtle-foreground))",
			"foreground-disabled": "hsl(var(--subtle-foreground-disabled))",
		},

		...themeColors,
	}
}
