"use client"

import { IconCheck, IconLoader } from "@tabler/icons-react"
import React from "react"
import {
	Collection as AriaCollection,
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	type ListBoxItemProps as AriaListBoxItemProps,
	type ListBoxProps as AriaListBoxProps,
	ListStateContext,
	Text,
	composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"

import { listBoxItemStyles, listBoxStyles } from "@pixelshades/styles/components/list-box"

interface ListBoxProps<T> extends AriaListBoxProps<T> {
	isLoading?: boolean
}
const ListBoxRoot = <T extends object>({ children, isLoading, ...props }: ListBoxProps<T>) => {
	const state = React.useContext(ListStateContext)
	const standalone = !state
	return (
		<AriaListBox
			{...props}
			className={composeRenderProps(props.className, (className) => listBoxStyles({ standalone, className }))}
		>
			<AriaCollection items={props.items}>{children}</AriaCollection>
			{isLoading && (
				<AriaListBoxItem className="flex items-center justify-center py-1.5">
					<IconLoader aria-label="Loading more..." className="size-5 animate-spin text-fg-muted" />
				</AriaListBoxItem>
			)}
		</AriaListBox>
	)
}

interface ItemProps<T> extends AriaListBoxItemProps<T>, VariantProps<typeof listBoxItemStyles> {
	label?: string
	description?: string
	prefix?: React.ReactNode
	suffix?: React.ReactNode
}

export const ListBoxItem = <T extends object>({
	variant,
	label,
	description,
	prefix,
	suffix,
	...props
}: ItemProps<T>) => {
	const textValue = props.textValue || (typeof props.children === "string" ? props.children : undefined)
	return (
		<AriaListBoxItem
			{...props}
			textValue={textValue}
			className={composeRenderProps(props.className, (className) => listBoxItemStyles({ variant, className }))}
		>
			{composeRenderProps(props.children, (children, { isSelected, selectionMode }) => (
				<>
					{selectionMode !== "none" && (
						<span className="flex w-8 shrink-0 items-center justify-center">
							{isSelected && <IconCheck aria-hidden className="size-4 text-foreground" />}
						</span>
					)}
					<span className="flex items-center gap-3">
						{prefix}
						<span className="flex flex-1 flex-col">
							{label && <Text slot="label">{label}</Text>}
							{description && <Text slot="description">{description}</Text>}
							{children}
						</span>
						{suffix}
					</span>
				</>
			))}
		</AriaListBoxItem>
	)
}

export type { ListBoxProps, ItemProps }

export const ListBox = Object.assign(ListBoxRoot, {
	Item: ListBoxItem,
})
