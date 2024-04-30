"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps } from "react-aria-components"
import {
	ComboBox as AriaComboBox,
	Button,
	Input,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	Text,
} from "react-aria-components"

import { comboboxVaraints } from "@pixelshades/styles/components/combo-box"
import { ChevronDown } from "lucide-react"
import type React from "react"

const { input, button, item, popover, root } = comboboxVaraints()

interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, "children"> {
	/** The styles of the combo box. */
	className?: string
	/** The label of the combo box. */
	label?: string
	/** The description of the combo box. */
	description?: string | null
	/** The error message to display if the combo box is invalid. */
	errorMessage?: string | null
	/** The combo box items. */
	children: React.ReactNode | ((item: T) => React.ReactNode)
}

const ComboBoxRoot = <T extends object>({
	label,
	className,
	description,
	errorMessage,
	children,
	...props
}: ComboBoxProps<T>) => (
	<AriaComboBox className={root({ className })} {...props} shouldFocusWrap>
		<Label className="text-foreground">{label}</Label>
		<div className="relative flex w-fit items-center rounded-2xl bg-background">
			<Input className={input()} />
			<Button className={button()}>
				<ChevronDown className="size-4 text-subtle-foreground" />
			</Button>
		</div>
		{description && <Text slot="description">{description}</Text>}
		{errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
		<Popover className={popover()}>
			<ListBox>{children}</ListBox>
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
