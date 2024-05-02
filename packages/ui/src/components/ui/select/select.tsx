"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { SelectProps as AriaSelectProps, ListBoxItemProps } from "react-aria-components"
import {
	Button as AriaButton,
	ListBox as AriaListBox,
	Select as AriaSelect,
	ListBoxItem,
	SelectValue,
} from "react-aria-components"

import { selectVariants } from "@pixelshades/styles/components/select"
import { ChevronDown } from "lucide-react"
import type React from "react"
import type { ReactNode } from "react"
import { FormDescription, FormFieldError } from "../form"
import { type FormComponentLabelProps, Label } from "../label"
import { Popover } from "../popover"

const { button, item, popover, root, icon, value } = selectVariants()

interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "children">, FormComponentLabelProps {
	className?: string
	items?: Iterable<T>
	helperText?: ReactNode
	errorMessage?: string
	children: React.ReactNode | ((item: T) => React.ReactNode)
}

const SelectRoot = <T extends object>({
	label,
	items,
	className,
	description,
	helperText,
	tooltip,
	errorMessage,
	children,
	isRequired,
	...props
}: SelectProps<T>) => (
	<AriaSelect className={root({ className })} isRequired={isRequired} {...props}>
		<Label tooltip={tooltip} description={description} isRequired={isRequired}>
			{label}
		</Label>
		<AriaButton className={button()}>
			<SelectValue className={value()} />
			<ChevronDown className={icon()} />
		</AriaButton>
		{helperText && <FormDescription>{helperText}</FormDescription>}
		<FormFieldError>{errorMessage}</FormFieldError>
		<Popover className={popover()}>
			<AriaListBox className="outline-none" items={items}>
				{children}
			</AriaListBox>
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
