// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { popoverBase } from "../../utils"

export const popoverVariants = tv({
	slots: {
		base: popoverBase(),

		arrow: "block forced-colors:fill-[Canvas] stroke-1 stroke-border forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90",
	},
})
