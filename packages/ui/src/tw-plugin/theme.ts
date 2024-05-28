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
		[`${color}-body`]: {
			DEFAULT: `hsl(var(--${color}-body))`,
			hover: `hsl(var(--${color}-body-hover))`,
			active: `hsl(var(--${color}-body-active))`,
			disabled: `hsl(var(--${color}-body-disabled))`,

			foreground: `hsl(var(--${color}-body-foreground))`,
			"foreground-hover": `hsl(var(--${color}-body-foreground-hover))`,
			"foreground-active": `hsl(var(--${color}-body-foreground-active))`,
			"foreground-disabled": `hsl(var(--${color}-body-foreground-disabled))`,
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

	return themeColors
}
