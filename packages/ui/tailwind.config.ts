import type { Config } from "tailwindcss"

import { dvPlugin } from "./src/tailwind"

const config: Config = {
	darkMode: ["class"],
	content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],

	plugins: [dvPlugin],
}

export default config
