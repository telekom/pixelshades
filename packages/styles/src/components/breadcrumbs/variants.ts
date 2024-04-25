// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const breadcrumbsVariants = tv({
	slots: {
		breadcrumbs: "flex items-center text-foreground",
		breadcrumb: "flex items-center",
		breadcrumbLink: "px-1",
		seperator: "size-4 text-subtle-foreground",
	},
})
