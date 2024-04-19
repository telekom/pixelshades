import {
	Command,
	CommandGroup,
	CommandItem,
	CommandItemDescription,
	CommandSearch,
	If,
	Typography,
} from "@pixelshades/ui/components"
import { components, dvds_pages } from "#site/content"

import Fuse, { type FuseResultMatch } from "fuse.js"
import { Highlight } from "../../../../packages/ui/src/components/ui/highlight"

import { useState } from "react"

import { Component, StickyNote } from "@pixelshades/ui/icons"

type SearchDialogProps = {
	open?: boolean
	handleOpenChange?: (isOpen: boolean) => void
}

export const SearchDialog = ({ open, handleOpenChange }: SearchDialogProps) => {
	const [inputValue, setInputValue] = useState("")

	const handleOnOpen = (isOpen: boolean) => {
		handleOpenChange?.(isOpen)
		if (!isOpen) {
			setInputValue("")
		}
	}

	const componentSearch = new Fuse(components, {
		keys: ["title", { name: "description", weight: 0.15 }, { name: "toc", weight: 0.3 }],
		threshold: 0.4,
		distance: 80,
		includeScore: true,
		includeMatches: true,
		shouldSort: true,
	})

	const dvdsSearch = new Fuse(dvds_pages, {
		keys: [
			"title",
			{ name: "description", weight: 0.15 },
			{ name: "toc.title", weight: 0.3 },
			{ name: "toc.items.title", weight: 0.3 },
		],
		threshold: 0.4,
		distance: 80,
		includeScore: true,
		includeMatches: true,
		findAllMatches: false,
		shouldSort: true,
	})

	const componentSearchResults = componentSearch.search(inputValue)
	const dvdsSearchResults = dvdsSearch.search(inputValue)

	const getMatches = (match: FuseResultMatch | undefined) => {
		if (!match || !match.value) {
			return []
		}
		const matchedSubstrings = match.indices.map(([start, end]) => match.value!.substring(start, end + 1))

		return matchedSubstrings
	}

	return (
		<Command
			open={open}
			searchField={<CommandSearch />}
			onOpenChange={handleOnOpen}
			onSearchChange={setInputValue}
			searchValue={inputValue}
			disableIntegratedSearch
		>
			<CommandGroup heading="Components" className="font-light text-primary-foreground">
				<If
					condition={componentSearchResults.length > 0 || inputValue.length !== 0}
					fallback={components.map((value) => (
						<CommandItem
							before={
								<div className="rounded-md border border-border bg-subtle p-2">
									<Component className="size-4 text-foreground" />
								</div>
							}
							key={value.slug}
							href={`/docs/components/${value.slug}`}
						>
							<div className="flex flex-col items-start gap-md">
								<Typography>{value.title}</Typography>
								<CommandItemDescription>{value.description}</CommandItemDescription>
							</div>
						</CommandItem>
					))}
				>
					{componentSearchResults.map((value) => (
						<CommandItem
							before={
								<div className="rounded-md border border-border bg-subtle p-2">
									<Component className="size-4" />
								</div>
							}
							key={value.refIndex}
							href={`/docs/components/${value.item.slug}`}
						>
							<div className="flex flex-col items-start gap-md">
								<Typography>
									<Highlight
										key={value.item.slug}
										highlight={getMatches(
											value.matches?.find((val) => val.value === value.item.title),
										)}
									>
										{value.item.title}
									</Highlight>
								</Typography>
								{value.item.description && (
									<CommandItemDescription
										highlight={getMatches(
											value.matches?.find((val) => val.value === value.item.description),
										)}
									>
										{value.item.description}
									</CommandItemDescription>
								)}
							</div>
						</CommandItem>
					))}
				</If>
			</CommandGroup>
			<CommandGroup heading="DVDS CLI Tool" className="max-w-min font-light text-primary-foreground">
				<If
					condition={dvdsSearchResults.length > 0}
					fallback={dvds_pages.map((value) => (
						<CommandItem
							key={value.slug}
							before={
								<div className="rounded-md border border-border bg-subtle p-2">
									<StickyNote className="size-4" />
								</div>
							}
						>
							<div className="flex flex-row items-center gap-2">
								<div className="flex flex-col items-start gap-1">
									<Typography>{value.title}</Typography>

									{value.description && (
										<CommandItemDescription>{value.description}</CommandItemDescription>
									)}
								</div>
							</div>
						</CommandItem>
					))}
				>
					{dvdsSearchResults.map((value) => (
						<CommandItem key={value.refIndex} href={`/docs/dvds-cli/${value.item.slug}`}>
							<div className="flex flex-row items-center gap-2">
								<div className="rounded-md border border-border bg-subtle p-2">
									<StickyNote size={18} className="text-foreground" />
								</div>
								<div className="flex flex-col items-start gap-1">
									<Highlight
										key={value.item.slug}
										highlight={getMatches(
											value.matches?.find((val) => val.value === value.item.title),
										)}
									>
										{value.item.title}
									</Highlight>

									{value.item.description && (
										<CommandItemDescription
											highlight={getMatches(
												value.matches?.find((val) => val.value === value.item.description),
											)}
											key={value.refIndex}
										>
											{value.item.description}
										</CommandItemDescription>
									)}
								</div>
							</div>
						</CommandItem>
					))}
				</If>
			</CommandGroup>
		</Command>
	)
}
