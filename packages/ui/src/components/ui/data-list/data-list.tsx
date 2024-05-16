"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { dataListVariants } from "@pixelshades/styles/components/data-list"
import { forwardRef } from "@pixelshades/utils/jsx"
import { createStyleContext } from "@pixelshades/utils/styles"
import type { HTMLAttributes } from "react"
import { getActiveBreakpoint } from "../../../utils"

export type DataListProps = HTMLAttributes<HTMLDListElement>

type ScreenSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

type Orientation = "horizontal" | "vertical"

type OrientationByBreakpoint = Record<ScreenSizes, Orientation>

const { withContext, withProvider } = createStyleContext(dataListVariants)

const UnstyledDataList = forwardRef((props: DataListProps) => {
	return <dl {...props} />
})

export type DataListItemProps = HTMLAttributes<HTMLDivElement> & {
	orientation?: Orientation | OrientationByBreakpoint
}

const UnstyledDataListItem = forwardRef((props: DataListItemProps) => {
	return <div {...props} />
})

export type DataListLabelProps = HTMLAttributes<HTMLElement>

const UnstyledDataListLabel = forwardRef((props: DataListLabelProps) => {
	return <dt {...props} />
})

export type DataListValueProps = HTMLAttributes<HTMLElement>

const UnstyledDataListValue = forwardRef(({ ...props }: DataListValueProps) => {
	return <dd {...props} />
})

const DataListRoot = withProvider(UnstyledDataList, "root")
const DataListItem = withContext(UnstyledDataListItem, "item", {
	valuesWithBreakpoints: ["orientation"],
	activeScreenSize: getActiveBreakpoint(),
})
const DataListLabel = withContext(UnstyledDataListLabel, "label")
const DataListValue = withContext(UnstyledDataListValue, "value")

export const DataList = Object.assign(DataListRoot, {
	Item: DataListItem,
	Label: DataListLabel,
	Value: DataListValue,
})
