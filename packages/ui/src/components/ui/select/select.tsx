"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { SelectProps as AriaSelectProps, ListBoxItemProps } from "react-aria-components"
import {
	Select as AriaSelect,
	Button,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	SelectValue,
	Text,
} from "react-aria-components"

import { selectVariants } from "@pixelshades/styles/components/select"
import { ChevronDown } from "lucide-react"
import type React from "react"

const { button, item, popover, root, icon } = selectVariants()

interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "children"> {
	className?: string
	label?: string
	description?: string | null
	errorMessage?: string | null
	children: React.ReactNode | ((item: T) => React.ReactNode)
}

const SelectRoot = <T extends object>({
	label,
	className,
	description,
	errorMessage,
	children,
	...props
}: SelectProps<T>) => (
	<AriaSelect className={root({ className })} {...props}>
		<Label>{label}</Label>
		<Button className={button()}>
			<SelectValue />
			<ChevronDown className={icon()} />
		</Button>
		{description && <Text slot="description">{description}</Text>}
		{errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
		<Popover className={popover()}>
			<ListBox className="outline-none">{children}</ListBox>
		</Popover>
	</AriaSelect>
)

SelectRoot.displayName = "Select"

const SelectItem = (props: ListBoxItemProps) => {
	return <ListBoxItem {...props} className={item()} />
}

SelectItem.displayName = "SelectItem"

export const Select = Object.assign(SelectRoot, {
	Item: SelectItem,
})
