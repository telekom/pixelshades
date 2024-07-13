"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { SelectProps as AriaSelectProps } from "react-aria-components"
import { Button as AriaButton, Select as AriaSelect, SelectValue } from "react-aria-components"

import { selectVariants } from "@pixelshades/styles/components/select"
import type React from "react"
import { IconChevronDown } from "../../../icons"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { type InputBasedCompBaseProps, InputRoot } from "../../core/input"
import { ListBox, ListBoxItem, type ListBoxProps } from "../listbox/listbox"
import { MenuLabel, MenuSection } from "../menu"
import { Popover } from "../popover"

const { popover, root, value } = selectVariants()

interface SelectProps<T extends object>
	extends Omit<AriaSelectProps<T>, "children">,
		FormFieldProps,
		Omit<InputBasedCompBaseProps, "after" | "loaderPosition"> {
	/** The styles to be applied to the select field. */
	className?: string
	/** Array of select options. */
	items?: Iterable<T>
	/** Children of the select field. */
	children: React.ReactNode | ((item: T) => React.ReactNode)

	dependencies?: ListBoxProps<T>["dependencies"]
}

const SelectRoot = <T extends object>({
	items,
	className,

	children,
	isRequired,
	dependencies,
	// FormField Props
	label,
	helperText,
	tooltip,
	description,
	errorMessage,

	// Input Root Props
	before,
	isLoading,
	...props
}: SelectProps<T>) => (
	<AriaSelect className={root({ className })} isRequired={isRequired} {...props}>
		<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
			<InputRoot before={before} isLoading={isLoading} loaderPosition={"before"}>
				<AriaButton
					className={
						"m-0 flex w-full appearance-none items-center justify-between border-none bg-transparent p-0 focus:outline-none"
					}
				>
					<SelectValue className={value()} />
					<IconChevronDown className="size-4" />
				</AriaButton>
			</InputRoot>
		</FormField>
		<Popover className={popover()}>
			<ListBox isLoading={isLoading} items={items} dependencies={dependencies}>
				{children}
			</ListBox>
		</Popover>
	</AriaSelect>
)

SelectRoot.displayName = "Select"

const SelectItem = ListBoxItem

const SelectSection = MenuSection

const SelectLabel = MenuLabel

export const Select = Object.assign(SelectRoot, {
	Item: SelectItem,
	Section: SelectSection,
	Label: SelectLabel,
})

export { SelectSection, SelectItem, SelectLabel }
