"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps } from "react-aria-components"
import { ComboBox as AriaComboBox, Button, ListBox, ListBoxItem } from "react-aria-components"

import { comboboxVaraints } from "@pixelshades/styles/components/combo-box"
import { ChevronDown } from "lucide-react"
import type React from "react"
import type { ReactNode } from "react"
import { FormDescription, FormFieldError } from "../form"
import { Input } from "../input"
import { type FormComponentLabelProps, Label } from "../label"
import { Popover } from "../popover"

const { button, item, popover, root, inputRoot } = comboboxVaraints()

interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, "children">, FormComponentLabelProps {
	/** The styles of the combo box. */
	className?: string
	/** The description of the combo box. */
	helperText?: ReactNode
	/** The error message to display if the combo box is invalid. */
	errorMessage?: string | null
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
	...props
}: ComboBoxProps<T>) => (
	<AriaComboBox className={root({ className })} {...props} shouldFocusWrap>
		<Label tooltip={tooltip} description={description} isRequired={props.isRequired}>
			{label}
		</Label>
		<div className={inputRoot()}>
			<Input />
			<Button className={button()}>
				<ChevronDown aria-hidden className="size-4 text-subtle-foreground" />
			</Button>
		</div>
		{helperText && <FormDescription>{helperText}</FormDescription>}
		<FormFieldError>{errorMessage}</FormFieldError>
		<Popover className={popover()} isNonModal>
			<ListBox className="max-h-[inherit] overflow-auto outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]">
				{children}
			</ListBox>
		</Popover>
	</AriaComboBox>
)

ComboBoxRoot.displayName = "ComboBox"

export type ComboBoxItemProps = ListBoxItemProps

const ComboBoxItem = (props: ComboBoxItemProps) => <ListBoxItem {...props} className={item()} />

ComboBoxItem.displayName = "ComboBoxItem"

export const ComboBox = Object.assign(ComboBoxRoot, {
	Item: ComboBoxItem,
})
