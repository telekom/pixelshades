import type { Config } from "tailwindcss"

import { pixelShadesPlugin } from "./src/tailwind"

const config: Config = {
	darkMode: ["class"],
	content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],

	plugins: [pixelShadesPlugin],
}

export default config
