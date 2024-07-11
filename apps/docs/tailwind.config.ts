import type { Config } from "tailwindcss"

import { pixelShadesPlugin } from "@pixelshades/ui/tailwind"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/ui/**/*.{js,ts,jsx,tsx,mdx,md}",
		"../../packages/styles/**/*.{js,ts,jsx,tsx,mdx,md}",
		"../../packages/auto-form/**/*.{js,ts,jsx,tsx,mdx,md}",
	],
	plugins: [pixelShadesPlugin],
}
export default config
