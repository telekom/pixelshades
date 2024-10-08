// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { Config } from "tailwindcss"

import { pixelShadesPlugin } from "./src/tailwind"

const config: Config = {
	darkMode: ["class"],
	content: [],
	plugins: [pixelShadesPlugin],
}

export default config
