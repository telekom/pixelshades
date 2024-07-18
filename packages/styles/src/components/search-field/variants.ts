// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { fieldBorderStyles } from "../form"

export const searchFieldVariants = tv({
	slots: {
		input: 'pl-[3.25rem] [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-cancel-button]:size-5 [&::-webkit-search-cancel-button]:bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMTIgMTJtLTkgMGE5IDkgMCAxIDAgMTggMGE5IDkgMCAxIDAgLTE4IDAiIC8+CiAgPHBhdGggZD0iTTEwIDEwbDQgNG0wIC00bC00IDQiIC8+Cjwvc3ZnPg==")] [&::-webkit-search-cancel-button]:bg-contain',
		icon: "absolute top-1/2 left-4 size-5 -translate-y-1/2 z-[60]",
	},
	variants: {
		...fieldBorderStyles.variants,
	},
})
