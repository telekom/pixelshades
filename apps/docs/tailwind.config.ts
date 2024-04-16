import type { Config } from "tailwindcss"

import { dvPlugin } from "@dv/ui/tailwind"

const config: Config = {
	darkMode: ["class"],
	content: [
		"../../packages/ui/**/*.{js,ts,jsx,tsx}",
		"../../packages/styles/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"../../node_modules/@dv/ui/dist/es/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
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
		},
	},
	plugins: [dvPlugin],
}

export default config
