// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import {tv} from "tailwind-variants"

export const cardVariants = tv({
    slots: {
        root: "flex flex-col justify-between rounded-xl border bg-card text-card-foreground shadow space-y-layout-md",
        header: "flex flex-col space-y-layout-sm p-layout-sm",
		title: "font-semibold leading-none tracking-tight",
		description: "text-sm text-subtle-foreground",
		content: "relative flex flex-col space-y-layout-sm p-layout-sm",
		footer: "flex items-center justify-between rounded-b-lg border-t bg-subtle dark:bg-transparent p-layout-sm",
    }
})
