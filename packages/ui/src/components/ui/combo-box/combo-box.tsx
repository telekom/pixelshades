"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type React from "react"

import type { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps } from "react-aria-components"
import { ComboBox as AriaComboBox } from "react-aria-components"

import { comboboxVaraints } from "@pixelshades/styles/components/combo-box"
import { IconChevronDown } from "@tabler/icons-react"

import { FormField, type FormFieldProps } from "../../core/form-field"
import { Input } from "../../core/input"
import { Button } from "../button"
import { ListBox, ListBoxItem } from "../listbox/listbox"
import { Popover } from "../popover"

const { button, item, popover, root, inputRoot } = comboboxVaraints()

interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, "children">, FormFieldProps {
	/** The styles of the combo box. */
	className?: string
	/** The combo box items. */
	children: React.ReactNode | ((item: T) => React.ReactNode)
}

const ComboBoxRoot = <T extends object>({
	label,
	className,
	description,
	helperText,
	tooltip,
	errorMessage,
	children,
	items,
	...props
}: ComboBoxProps<T>) => (
	<AriaComboBox className={root({ className })} {...props} shouldFocusWrap>
		{({ isRequired, isDisabled }) => (
			<>
				<FormField tooltip={tooltip} description={description} isRequired={isRequired} isDisabled={isDisabled}>
					<Input.Root>
						<Input />
						<Button variant="ghost">
							<IconChevronDown aria-hidden className="size-4 text-subtle-foreground" />
						</Button>
					</Input.Root>
				</FormField>
				<Popover className={popover()} isNonModal>
					<ListBox items={items}>{children}</ListBox>
				</Popover>
			</>
		)}
	</AriaComboBox>
)

ComboBoxRoot.displayName = "ComboBox"

export type ComboBoxItemProps = ListBoxItemProps

export const ComboBox = Object.assign(ComboBoxRoot, {
	Item: ListBoxItem,
})
