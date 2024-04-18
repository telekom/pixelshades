import { Command as CommandIcon } from "lucide-react"
import { type ReactNode, useMemo, useRef } from "react"
import {
	Header as AriaHeader,
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	Section as AriaSection,
	type ListBoxItemProps,
	type SectionProps,
} from "react-aria-components"

import { commandVariants } from "@pixelshades/styles/components/command"
import { useControllableState } from "../../../hooks/use-controlled-state"
import { type Keys, useKeyPress } from "../../../hooks/use-keypress"
import { createStyleContext } from "../../../utils/create-style-context"
import { RenderSlot } from "../../../utils/jsx"
import { If } from "../../utils/if"
import { Button } from "../button"
import { Dialog, DialogContent } from "../dialog"
import { Highlight } from "../highlight"
import { Input, type InputProps } from "../input"
import { Typography, type TypographyProps } from "../typography"
import { CommandContext, useCommand } from "./command-context"

const { icon } = commandVariants()

const { withContext, withProvider } = createStyleContext(commandVariants)

interface CommandProps {
	/** The children of the command. */
	children?: React.ReactNode
	/** Class name to apply to the command. */
	className?: string
	/** Callback when the command is opened or closed. */
	onOpenChange?: (isOpen: boolean) => void
	/** Shortcut keys to open the command. */
	shortcut?: Array<Keys>
	/** The search field to display in the command. */
	searchField?: ReactNode
	/** Whether the command is open. */
	open?: boolean
	/** Callback when the search value changes. */
	onSearchChange?: (value: string) => void
	/** The values to search for. */
	searchValue?: string
	/** Whether to disable the integrated search. */
	disableIntegratedSearch?: boolean
}
/** Displays a command with a title and a list of actions. */
const UnstyledCommand = ({
	children,
	shortcut = ["Meta", "KeyK"],
	searchField,
	className,
	onOpenChange,
	open: controlledOpen,

	onSearchChange,
	searchValue: controlledSearchValue,
	disableIntegratedSearch = false,
}: CommandProps) => {
	const [searchValue, setSearchValue] = useControllableState({
		value: controlledSearchValue,
		onChange: onSearchChange,
		defaultValue: "",
	})

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
		<CommandContext.Provider value={{ open, setOpen, searchValue, setSearchValue, disableIntegratedSearch }}>
			<If condition={!onOpenChange}>
				<CommandTrigger>
					Search...
					<CommandIcon className="size-4" /> {shortcut[1]?.charAt(shortcut[1].length - 1)}
				</CommandTrigger>
			</If>
			<Dialog isOpen={open} onOpenChange={setOpen} className={className} aria-label="Command Dialog">
				<DialogContent className="flex w-full flex-col items-start">
					<div className="sticky w-full">{searchField}</div>

					<AriaListBox
						className={"flex flex-col items-start gap-4 font-light text-primary-foreground text-xs"}
						orientation="vertical"
						selectionMode="single"
						aria-label="Components Search Results"
					>
						{children}
					</AriaListBox>
				</DialogContent>
			</Dialog>
		</CommandContext.Provider>
	)
}

const CommandTrigger = ({ children }: { children: ReactNode }) => {
	const { setOpen } = useCommand()
	return (
		<Button variant="outline" className={"self-end text-subtle-foreground"} onPress={() => setOpen(true)}>
			{children}
		</Button>
	)
}

export interface CommandSearchProps extends Omit<InputProps, "className" | "onChange" | "value"> {
	/** Class name to apply to the search field. */
	className?: string
}

/** Displays a search field for the command. */
const CommandSearch = ({ placeholder = "Search...", ...props }: CommandSearchProps) => {
	const { setSearchValue, searchValue } = useCommand()

	return (
		<Input
			value={searchValue}
			onChange={(e) => {
				setSearchValue(e.target.value)
			}}
			placeholder={placeholder}
			autoFocus
			{...props}
		/>
	)
}

export interface CommandItemDescriptionProps extends TypographyProps<"p"> {
	/** The characters to highlight in the description when integrated search is enabled. */
	highlight?: string | string[]
	/** The children of the description. */
	children: string
}

/** Displays a description of a command item. */
const UnstyledCommandItemDescription = ({
	children,
	highlight: controlledHighlight,
	...props
}: CommandItemDescriptionProps) => {
	const { searchValue, disableIntegratedSearch } = useCommand()

	return (
		<Typography size="xs" {...props}>
			<Highlight
				highlight={!disableIntegratedSearch ? searchValue : controlledHighlight}
				minLengthToHighlight={2}
			>
				{children}
			</Highlight>
		</Typography>
	)
}
export interface CommandItemTitleProps extends TypographyProps<"p"> {
	/** The characters to highlight in the title when integrated search is enabled. */
	highlight?: string | string[]
	/** The children of the title. */
	children: string
}
/** Displays a title of a command item. */
const UnstyledCommandItemTitle = ({ children, highlight: controlledHighlight, ...props }: CommandItemTitleProps) => {
	const { searchValue, disableIntegratedSearch } = useCommand()

	return (
		<Typography {...props}>
			<Highlight
				highlight={!disableIntegratedSearch ? searchValue : controlledHighlight}
				minLengthToHighlight={2}
			>
				{children}
			</Highlight>
		</Typography>
	)
}

export interface CommandGroupProps<T> extends SectionProps<T> {
	/** The heading of the group. */
	heading: string
	/** The items of the group. */
	children?: ReactNode
}
/** Displays a group of command items. */
const UnstyledCommandGroup = <T,>({ heading, children }: CommandGroupProps<T>) => (
	<AriaSection>
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
}

/** Displays a command item. */
const UnstyledCommandItem = ({ children, before, searchValues = [], after, ...props }: CommandItemProps) => {
	const { searchValue: searchInputValue, disableIntegratedSearch } = useCommand()

	const isMatched = useMemo(
		() => isMatching({ searchInputValue, searchValues, disableIntegratedSearch }),
		[searchInputValue, searchValues, disableIntegratedSearch],
	)

	if (!isMatched.matching) {
		return null
	}

	return (
		<AriaListBoxItem {...props} textValue={searchValues?.join(".") || ""}>
			<>
				<If condition={before}>
					<RenderSlot item={before!} className={icon()} />
				</If>
				{children}
				<If condition={after}>
					<RenderSlot item={after!} className={icon()} />
				</If>
			</>
		</AriaListBoxItem>
	)
}

const isMatching = ({
	searchInputValue,
	searchValues,
	disableIntegratedSearch,
}: { disableIntegratedSearch: boolean; searchValues?: string[]; searchInputValue?: string }) => {
	// if disableIntegratedSearch is true, then we don't want to match against the searchValue
	if (disableIntegratedSearch) {
		return { matching: true, matchedCharacters: [] }
	}
	if (!searchValues) {
		return { matching: true, matchedCharacters: [] }
	}
	if (!searchInputValue) {
		return { matching: true, matchedCharacters: [] }
	}

	const matchedValues = fullTextSearch(
		searchValues.filter((searchValue) => searchValue !== ""),
		searchInputValue,
	)
	return { matching: matchedValues.result.length > 0, matchedCharacters: matchedValues.matchedChars }
}

function fullTextSearch(data: string[], searchTerm: string) {
	const searchResults = []
	const matchedChars: any[] = []
	// Loop through each object in the data array
	for (const item of data) {
		// Convert all object values to lowercase strings for case-insensitive search
		const values = Object.values(item).map((value) => String(value).toLowerCase())
		// Check if any of the values contain the search term
		const valueContainsSearchTerm = values.some((value, index) => {
			if (searchTerm.toLowerCase().split("").includes(value)) {
				matchedChars.push(item.charAt(index))
				return true
			}

			return false
		})

		if (valueContainsSearchTerm) {
			searchResults.push(item)
		}
	}
	return { result: searchResults, matchedChars: matchedChars }
}

/** Displays a command with a title and a list of actions. */
const Command = withProvider(UnstyledCommand, "command")
const CommandItemDescription = withContext(UnstyledCommandItemDescription, "itemDescription")
const CommandItemTitle = withContext(UnstyledCommandItemTitle, "itemTitle")
const CommandGroup = withContext(UnstyledCommandGroup, "group")
const CommandItem = withContext(UnstyledCommandItem, "item")

export { Command, CommandGroup, CommandItem, CommandItemDescription, CommandItemTitle, CommandSearch }
