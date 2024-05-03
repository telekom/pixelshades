// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { Config } from "tailwindcss"

import { pixelShadesPlugin } from "./src/tailwind"

const config: Config = {
	darkMode: ["class"],
	content: ["../../packages/ui/**/*.{js,ts,jsx,tsx,mdx,md}", "../../packages/styles/**/*.{js,ts,jsx,tsx,mdx,md}"],

	plugins: [pixelShadesPlugin],
}

export default config
