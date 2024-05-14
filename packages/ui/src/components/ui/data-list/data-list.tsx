"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { dataListVariants } from "@pixelshades/styles/components/data-list"
import { forwardRef } from "@pixelshades/utils/jsx"
import { cn, createStyleContext } from "@pixelshades/utils/styles"
import type { HTMLAttributes } from "react"

type ScreenSizeOptions = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export type DataListProps = HTMLAttributes<HTMLDListElement> & {
	orientation?: Record<ScreenSizeOptions, "vertical" | "horizontal">
}

const { withContext, withProvider } = createStyleContext(dataListVariants)

const UnstyledDataList = forwardRef(
	({
		orientation = {
			"2xl": "vertical",
			xl: "vertical",
			lg: "vertical",
			md: "vertical",
			sm: "horizontal",
			xs: "horizontal",
		},
		...props
	}: DataListProps) => {
		return <dl {...props} />
	},
)

export type DataListItemProps = HTMLAttributes<HTMLDivElement> & {
	orientation?: Record<ScreenSizeOptions, "vertical" | "horizontal">
}

const UnstyledDataListItem = forwardRef(
	({
		orientation = {
			"2xl": "vertical",
			xl: "vertical",
			lg: "vertical",
			md: "vertical",
			sm: "horizontal",
			xs: "horizontal",
		},
		...props
	}: DataListItemProps) => {
		return <div {...props} />
	},
)

export type DataListLabelProps = HTMLAttributes<HTMLElement>

const UnstyledDataListLabel = forwardRef((props: DataListLabelProps) => {
	return <dt {...props} />
})

export type DataListValueProps = HTMLAttributes<HTMLElement>

const UnstyledDataListValue = forwardRef(({ ...props }: DataListValueProps) => {
	return <dd {...props} />
})

const DataListRoot = withProvider(UnstyledDataList, "root")
const DataListItem = withContext(UnstyledDataListItem, "item")
const DataListLabel = withContext(UnstyledDataListLabel, "label")
const DataListValue = withContext(UnstyledDataListValue, "value")

export const DataList = Object.assign(DataListRoot, {
	Item: DataListItem,
	Label: DataListLabel,
	Value: DataListValue,
})
