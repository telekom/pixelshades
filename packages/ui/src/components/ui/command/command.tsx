"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { ReactNode } from "react"
import {
	Header as AriaHeader,
	Section as AriaSection,
	Text as AriaText,
	ComboBox,
	type ComboBoxProps,
	type SectionProps,
} from "react-aria-components"

import { commandVariants } from "@pixelshades/styles/components/command"
import { createStyleContext } from "@pixelshades/utils/styles"
import { useControllableState } from "../../../hooks/use-controlled-state"
import { type Keys, useKeyPress } from "../../../hooks/use-keypress"
import { IconCommand } from "../../../icons"
import { Input, type InputProps } from "../../core/input"
import { Button } from "../button"
import { Dialog } from "../dialog"
import { Kbd } from "../kbd"
import { ListBox, ListBoxItem } from "../listbox/listbox"
import { Typography, type TypographyProps } from "../typography"

const { dialog } = commandVariants()

const { withContext, withProvider } = createStyleContext(commandVariants)

export interface CommandDialogProps {
	/** The children of the command. */
	children?: React.ReactNode
	/** Class name to apply to the command. */
	className?: string
	/** Callback when the command is opened or closed. */
	onOpenChange?: (isOpen: boolean) => void
	/** Shortcut keys to open the command. */
	shortcut?: Array<Keys>
	/** Whether the command is open. */
	open?: boolean
}

const CommandDialog = ({
	shortcut = ["Meta", "KeyK"],
	onOpenChange,
	open: controlledOpen,
	children,
}: CommandDialogProps) => {
	const [open, setOpen] = useControllableState({
		value: controlledOpen,
		onChange: onOpenChange,
		defaultValue: false,
	})

	useKeyPress({
		keyPressItems: [
			{
				keys: shortcut,
				event: (e) => setOpen(true),
			},
		],
	})

	return (
		<Dialog.Trigger onOpenChange={setOpen} isOpen={open}>
			<CommandTrigger />
			<Dialog className={dialog()}>{children}</Dialog>
		</Dialog.Trigger>
	)
}

interface CommandProps<T extends object> extends ComboBoxProps<T> {
	/** The children of the command. */
	children?: React.ReactNode
	/** Class name to apply to the command. */
	className?: string
	/** The search field to display in the command. */
	searchField?: ReactNode
}
/** Displays a command with a title and a list of actions. */
const UnstyledCommand = <T extends object>({ children, searchField, ...props }: CommandProps<T>) => {
	return (
		<ComboBox aria-label="CMDK Search" {...props} allowsEmptyCollection menuTrigger="focus">
			{searchField}
			<ListBox
				className="max-h-[300px] overflow-y-auto overflow-x-hidden"
				renderEmptyState={() => (
					<Typography className="py-xl text-center text-sm">No results found.</Typography>
				)}
			>
				{children}
			</ListBox>
		</ComboBox>
	)
}

const CommandTrigger = ({ children }: { children?: ReactNode }) => {
	return (
		<Button
			variant="outline"
			className={"w-full justify-between self-end text-subtle-foreground"}
			after={
				<Kbd className="w-min" keys={["command"]}>
					K
				</Kbd>
			}
		>
			{children ?? "Search..."}
		</Button>
	)
}

export interface CommandSearchProps extends Omit<InputProps, "className"> {
	/** Class name to apply to the search field. */
	className?: string
}

/** Displays a search field for the command. */
const CommandSearch = ({ placeholder = "Search...", ...props }: CommandSearchProps) => {
	return (
		<Input.Root className="rounded-b-none border-0 border-b bg-transparent">
			<Input
				autoFocus
				// focusRing={false}
				placeholder={placeholder}
				{...props}
			/>
		</Input.Root>
	)
}

export interface CommandItemDescriptionProps extends TypographyProps<"p"> {}

export interface CommandItemTitleProps extends TypographyProps<"p"> {}

export interface CommandGroupProps<T> extends SectionProps<any> {
	/** The heading of the group. */
	heading: string
	/** The items of the group. */
	children?: ReactNode
}
/** Displays a group of command items. */
const UnstyledCommandGroup = <T,>({ heading, children, ...rest }: CommandGroupProps<T>) => (
	<AriaSection {...rest}>
		<AriaHeader slot="title">{heading}</AriaHeader>
		{children}
	</AriaSection>
)

const CommandRoot = withProvider(UnstyledCommand, "command")
const CommandGroup = withContext(UnstyledCommandGroup, "group")
const CommandItem = ListBoxItem

export const Command = Object.assign(CommandRoot, {
	Group: CommandGroup,
	Item: CommandItem,
	Search: CommandSearch,
	Trigger: CommandTrigger,
	Icon: IconCommand,
	Dialog: CommandDialog,
})

export { CommandDialog, IconCommand as CommandIcon, CommandItem, CommandSearch, CommandTrigger }
