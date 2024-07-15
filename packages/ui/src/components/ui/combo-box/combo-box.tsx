"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type React from "react"

import type { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps } from "react-aria-components"
import { Button as AriaButton, ComboBox as AriaComboBox } from "react-aria-components"

import { comboboxVaraints } from "@pixelshades/styles/components/combo-box"
import { IconChevronDown } from "@tabler/icons-react"

import { FormField, type FormFieldProps } from "../../core/form-field"
import { Input, type InputBasedCompBaseProps } from "../../core/input"

import { ListBox, ListBoxItem } from "../listbox/listbox"
import { Popover } from "../popover"

const { popover, root } = comboboxVaraints()

interface ComboBoxProps<T extends object>
	extends Omit<AriaComboBoxProps<T>, "children">,
		FormFieldProps,
		Omit<InputBasedCompBaseProps, "after" | "loaderPosition"> {
	/** The styles of the combo box. */
	className?: string
	/** The combo box items. */
	children: React.ReactNode | ((item: T) => React.ReactNode)
}

const ComboBoxRoot = <T extends object>({
	className,

	children,
	items,

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
}: ComboBoxProps<T>) => (
	<AriaComboBox className={root({ className })} {...props} shouldFocusWrap>
		{({ isRequired, isDisabled }) => (
			<>
				<FormField
					label={label}
					tooltip={tooltip}
					description={description}
					isRequired={isRequired}
					isDisabled={isDisabled}
				>
					<Input.Root before={before} isLoading={isLoading} loaderPosition={"before"}>
						<Input />
						<AriaButton
							className={
								"m-0 flex appearance-none items-center justify-between border-none bg-transparent p-0 focus:outline-none"
							}
						>
							<IconChevronDown aria-hidden className="size-4 text-subtle-foreground" />
						</AriaButton>
					</Input.Root>
				</FormField>
				<Popover className={popover()} isNonModal>
					<ListBox items={items} isLoading={isLoading}>
						{children}
					</ListBox>
				</Popover>
			</>
		)}
	</AriaComboBox>
)

ComboBoxRoot.displayName = "ComboBox"

export type ComboBoxItemProps = ListBoxItemProps

export const ComboBoxItem = ListBoxItem

export const ComboBox = Object.assign(ComboBoxRoot, {
	Item: ComboBoxItem,
})
