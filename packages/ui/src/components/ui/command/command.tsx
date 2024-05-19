"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Command as CommandIcon } from "lucide-react"
import type { ReactNode } from "react"
import {
	Header as AriaHeader,
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	Section as AriaSection,
	Text as AriaText,
	ComboBox,
	type ComboBoxProps,
	type ListBoxItemProps,
	type SectionProps,
} from "react-aria-components"

import { commandVariants } from "@pixelshades/styles/components/command"
import { inputVariants } from "@pixelshades/styles/components/input"
import { RenderSlot } from "@pixelshades/utils/jsx"
import { createStyleContext } from "@pixelshades/utils/styles"
import { useControllableState } from "../../../hooks/use-controlled-state"
import { type Keys, useKeyPress } from "../../../hooks/use-keypress"
import { If } from "../../utils/if"
import { Button } from "../button"
import { Dialog } from "../dialog"
import { Input, type InputProps } from "../input"
import { Kbd } from "../kbd"
import { Typography, type TypographyProps } from "../typography"
import { useCommand } from "./command-context"

const { icon } = commandVariants()

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
			<Dialog>{children}</Dialog>
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
	/** Whether to disable the integrated search. */
	disableIntegratedSearch?: boolean
}
/** Displays a command with a title and a list of actions. */
const UnstyledCommand = <T extends object>({ children, searchField, ...props }: CommandProps<T>) => {
	return (
		<ComboBox aria-label="CMDK Search" {...props}>
			{searchField}
			<AriaListBox
				className="max-h-[300px] overflow-y-auto overflow-x-hidden"
				renderEmptyState={() => (
					<Typography className="py-xl text-center text-sm">No results found.</Typography>
				)}
			>
				{children}
			</AriaListBox>
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

export interface CommandSearchProps extends Omit<InputProps, "className" | "onChange" | "value"> {
	/** Class name to apply to the search field. */
	className?: string
}

/** Displays a search field for the command. */
const CommandSearch = ({ placeholder = "Search...", ...props }: CommandSearchProps) => {
	return (
		<Input
			autoFocus
			className="rounded-b-none border-0 border-b bg-transparent"
			placeholder={placeholder}
			{...props}
		/>
	)
}

export interface CommandItemDescriptionProps extends TypographyProps<"p"> {}

/** Displays a description of a command item. */
const UnstyledCommandItemDescription = ({ children, ...props }: CommandItemDescriptionProps) => {
	return (
		<Typography size="xs" {...props} as={AriaText} slot="description">
			{children}
		</Typography>
	)
}
export interface CommandItemTitleProps extends TypographyProps<"p"> {}
/** Displays a title of a command item. */
const UnstyledCommandItemTitle = ({ children, ...props }: CommandItemTitleProps) => {
	return (
		<Typography {...props} as={AriaText} slot="label">
			{children}
		</Typography>
	)
}

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

type CommandItemProps = Omit<ListBoxItemProps, "children" | "textValue"> & {
	/** The children of the command item. */
	children?: ReactNode | ReactNode[]
	/** Class name to apply to the command item. */
	className?: string
	/** The values to search for. */
	searchValues?: string[]
	/** Element shown before the child */
	before?: React.ReactElement<HTMLElement>
	/** Element shown after the child */
	after?: React.ReactElement<HTMLElement>

	title: string
	description?: ReactNode
}

/** Displays a command item. */
const UnstyledCommandItem = ({
	children,
	before,
	title,
	description,
	searchValues = [],
	after,
	...props
}: CommandItemProps) => {
	return (
		<AriaListBoxItem textValue={title} {...props}>
			<>
				<If condition={before}>
					<RenderSlot item={before!} className={icon()} />
				</If>
				<div className="flex flex-col">
					<CommandItemTitle>{title}</CommandItemTitle>
					{description && <CommandItemDescription>{description}</CommandItemDescription>}
				</div>
				<If condition={after}>
					<RenderSlot item={after!} className={icon()} />
				</If>
			</>
		</AriaListBoxItem>
	)
}

/** Displays a command with a title and a list of actions. */
const CommandRoot = withProvider(UnstyledCommand, "command")
const CommandItemDescription = withContext(UnstyledCommandItemDescription, "itemDescription")
const CommandItemTitle = withContext(UnstyledCommandItemTitle, "itemTitle")
const CommandGroup = withContext(UnstyledCommandGroup, "group")
const CommandItem = withContext(UnstyledCommandItem, "item")

export const Command = Object.assign(CommandRoot, {
	Group: CommandGroup,
	Item: CommandItem,
	ItemTitle: CommandItemTitle,
	ItemDescription: CommandItemDescription,
	Search: CommandSearch,
	Trigger: CommandTrigger,
	Icon: CommandIcon,
	Dialog: CommandDialog,
})

export {
	CommandDialog,
	CommandItem,
	CommandItemTitle,
	CommandItemDescription,
	CommandSearch,
	CommandTrigger,
	CommandIcon,
}
