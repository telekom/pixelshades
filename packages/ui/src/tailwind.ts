import ariaPlugin from "tailwindcss-react-aria-components"
import { fontFamily } from "tailwindcss/defaultTheme.js"
import plugin from "tailwindcss/plugin.js"

export const dvPlugin = plugin(
	({ addUtilities, addBase }) => {
		// Call the ariaPlugin and add its utilities
		// You can add your own utilities or call other plugins here
	},
	{
		theme: {
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},

			extend: {
				spacing: {
					xs: "var(--spacing-xs)",
					sm: "var(--spacing-sm)",
					md: "var(--spacing-md)",
					lg: "var(--spacing-lg)",
					xl: "var(--spacing-xl)",

					"layout-xs": "var(--spacing-layout-xs)",
					"layout-sm": "var(--spacing-layout-sm)",
					"layout-md": "var(--spacing-layout-md)",
					"layout-lg": "var(--spacing-layout-lg)",
					"layout-xl": "var(--spacing-layout-xl)",
					"layout-2xl": "var(--spacing-layout-2xl)",
				},
				colors: {
					border: "hsl(var(--border))",
					input: "hsl(var(--input))",
					ring: "hsl(var(--ring))",
					background: "hsl(var(--background))",
					foreground: "hsl(var(--foreground))",
					primary: {
						DEFAULT: "hsl(var(--primary))",
						foreground: "hsl(var(--primary-foreground))",
					},
					secondary: {
						DEFAULT: "hsl(var(--secondary))",
						foreground: "hsl(var(--secondary-foreground))",
					},
					destructive: {
						DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
						foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
					},
					subtle: {
						DEFAULT: "hsl(var(--subtle))",
						foreground: "hsl(var(--subtle-foreground))",
					},
					accent: {
						DEFAULT: "hsl(var(--accent))",
						foreground: "hsl(var(--accent-foreground))",
					},
					popover: {
						DEFAULT: "hsl(var(--popover))",
						foreground: "hsl(var(--popover-foreground))",
					},
					card: {
						DEFAULT: "hsl(var(--card))",
						foreground: "hsl(var(--card-foreground))",
					},
				},
				borderRadius: {
					xl: "calc(var(--radius) + 4px)",
					lg: "var(--radius)",
					md: "calc(var(--radius) - 2px)",
					sm: "calc(var(--radius) - 4px)",
				},
				fontFamily: {
					sans: ["Fira Sans", ...fontFamily.sans],
				},
				keyframes: {
					"accordion-down": {
						from: { height: "0" },
						to: { height: "var(--radix-accordion-content-height)" },
					},
					"accordion-up": {
						from: { height: "var(--radix-accordion-content-height)" },
						to: { height: "0" },
					},
				},
				animation: {
					"accordion-down": "accordion-down 0.2s ease-out",
					"accordion-up": "accordion-up 0.2s ease-out",
				},
			},
		},
	},
)