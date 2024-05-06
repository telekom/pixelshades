// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const modalVariants = tv({
	slots: {
		modal: "rounded-xl bg-background border outline-none entering:animate-zoom",
		overlay:
			"fixed left-0 top-0 z-50 flex h-[var(--visual-viewport-height)] w-screen items-center justify-center bg-black/80 entering:animate-fade exiting:animate-fadeOut",
	},
})
