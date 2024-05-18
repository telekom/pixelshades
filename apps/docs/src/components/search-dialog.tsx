import { Command, If } from "@pixelshades/ui/components"
import { components, dvds_pages } from "#site/content"

import Fuse from "fuse.js"

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

	return (
		<Command.Dialog open={open} onOpenChange={handleOnOpen}>
			<Command searchField={<Command.Search />}>
				<Command.Group heading="Components">
					<If
						condition={componentSearchResults.length > 0 || inputValue.length !== 0}
						fallback={components.map((value) => (
							<Command.Item
								before={
									<div className="rounded-md border border-border bg-subtle p-2">
										<Component className="size-4 text-foreground" />
									</div>
								}
								key={value.slug}
								href={`/docs/components/${value.slug}`}
								title={value.title}
								description={value.description}
							/>
						))}
					>
						{componentSearchResults.map((value) => (
							<Command.Item
								before={
									<div className="rounded-md border border-border bg-subtle p-2">
										<Component className="size-4" />
									</div>
								}
								key={value.refIndex}
								href={`/docs/components/${value.item.slug}`}
								title={value.item.title}
								description={value.item.description}
							/>
						))}
					</If>
				</Command.Group>
				<Command.Group heading="DVDS CLI Tool">
					<If
						condition={dvdsSearchResults.length > 0}
						fallback={dvds_pages.map((value) => (
							<Command.Item
								key={value.slug}
								before={
									<div className="rounded-md border border-border bg-subtle p-2">
										<StickyNote className="size-4" />
									</div>
								}
								title={value.title}
								description={value.description}
							/>
						))}
					>
						{dvdsSearchResults.map((value) => (
							<Command.Item
								key={value.refIndex}
								href={`/docs/dvds-cli/${value.item.slug}`}
								title={value.item.title}
								description={value.item.description}
							/>
						))}
					</If>
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
