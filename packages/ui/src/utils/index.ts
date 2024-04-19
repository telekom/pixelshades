// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import clsx from "clsx"
import type { ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * twMerge with extended options.
 */
export const twMerge = extendTailwindMerge({
	extend: {
		theme: {
			spacing: ["xs", "sm", "md", "lg", "xl", "2xl"],
		},
	},
})

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
