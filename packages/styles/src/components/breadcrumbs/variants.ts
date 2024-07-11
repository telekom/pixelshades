// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const breadcrumbsVariants = tv({
	slots: {
		breadcrumbs: "flex items-center text-foreground",
		breadcrumb: "flex items-center [&_svg]:last:hidden text-sm",
		breadcrumbLink: "px-sm hover:text-foreground text-subtle-foreground transition-colors current:text-foreground",
		seperator: "size-4 text-subtle-foreground",
	},
})
