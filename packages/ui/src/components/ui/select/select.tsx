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
import type React from "react"
import { IconChevronDown } from "../../../icons"
import { FormField, type FormFieldProps } from "../../core/form"
import { MenuLabel, MenuSection } from "../menu"
import { Popover } from "../popover"

const { button, item, popover, root, icon, value } = selectVariants()

interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "children">, FormFieldProps {
	/** The styles to be applied to the select field. */
	className?: string
	/** Array of select options. */
	items?: Iterable<T>
	/** Children of the select field. */
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
		<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
			<AriaButton className={button()}>
				<SelectValue className={value()} />
				<IconChevronDown className={icon()} />
			</AriaButton>
		</FormField>
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

const SelectSection = MenuSection

const SelectLabel = MenuLabel

SelectItem.displayName = "SelectItem"

export const Select = Object.assign(SelectRoot, {
	Item: SelectItem,
	Section: SelectSection,
	Label: SelectLabel,
})

export { SelectSection, SelectItem, SelectLabel }
