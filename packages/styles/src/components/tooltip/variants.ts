// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { popoverBase } from "../../utils"

export const tooltipVariants = tv({
	base: ["p-md", popoverBase()],
})
