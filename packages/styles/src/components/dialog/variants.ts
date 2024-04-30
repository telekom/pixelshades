// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const dialogVariants = tv({
	slots: {
		modal: "max-w-3/4 w-3/4 rounded-xl border md:w-96",
		container: "fixed inset-0 z-40 flex items-center justify-center",
		content: "flex flex-col gap-6 text-fg outline-none",
		header: "flex flex-col space-y-1.5 text-center sm:text-left",
		title: "text-lg font-semibold leading-none tracking-tight",
		footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
	},
})
