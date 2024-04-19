// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { Config } from "tailwindcss"

import { pixelShadesPlugin } from "@pixelshades/ui/tailwind"

const config: Config = {
	darkMode: ["class"],
	content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],

	plugins: [pixelShadesPlugin],
}

export default config
