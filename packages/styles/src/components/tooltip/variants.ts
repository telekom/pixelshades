// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const tooltipVariants = tv({
	base: "m-1 max-w-sm rounded-md border border-border bg-background p-2 text-foreground shadow-xl outline-none [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
})
