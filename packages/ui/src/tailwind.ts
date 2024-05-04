// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { fontFamily } from "tailwindcss/defaultTheme.js"
import plugin from "tailwindcss/plugin.js"

export const pixelShadesPlugin = plugin(
	() => {
		// Call the ariaPlugin and add its utilities
		// You can add your own utilities or call other plugins here
	},
	{
		darkMode: "class",
		plugins: [require("tailwindcss-react-aria-components"), require("tailwindcss-animate")],
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
					info: {
						DEFAULT: "hsl(var(--info) / <alpha-value>)",
						foreground: "hsl(var(--info-foreground) / <alpha-value>)",
					},
					subtle: {
						DEFAULT: "hsl(var(--subtle))",
						foreground: "hsl(var(--subtle-foreground))",
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
