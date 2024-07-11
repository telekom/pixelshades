"use client"

import { Command, If } from "@pixelshades/ui/components"

import Fuse from "fuse.js"

import { useState } from "react"

import { components } from "#site/content"

import { IconComponents, IconNote } from "@pixelshades/ui/icons"

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

	const componentSearchResults = componentSearch.search(inputValue)

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
										<IconComponents className="size-4 text-foreground" />
									</div>
								}
								key={value.path}
								href={value.permalink}
								title={value.title}
								description={value.description}
							/>
						))}
					>
						{componentSearchResults.map((value) => (
							<Command.Item
								before={
									<div className="rounded-md border border-border bg-subtle p-2">
										<IconComponents className="size-4" />
									</div>
								}
								key={value.refIndex}
								href={value.item.permalink}
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
