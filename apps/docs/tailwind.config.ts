import type { Config } from "tailwindcss"

import { pixelShadesPlugin } from "@pixelshades/ui/tailwind"

const config: Config = {
	darkMode: ["class"],
	content: [
		"../../packages/ui/**/*.{js,ts,jsx,tsx,mdx,md}",
		"../../packages/styles/**/*.{js,ts,jsx,tsx,mdx,md}",
		"./src/**/*.{js,ts,jsx,tsx,mdx,md}",
		"./content/**/*.{js,ts,jsx,tsx,mdx,md}",
		"../../node_modules/@pixelshades/ui/dist/es/**/*.{js,ts,jsx,tsx,mdx,md}",
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
	plugins: [pixelShadesPlugin, require("tailwindcss-react-aria-components")],
}

export default config
