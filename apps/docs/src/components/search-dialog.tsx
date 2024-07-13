"use client"

import { Command, If } from "@pixelshades/ui/components"

import { useState } from "react"

import { components } from "#site/content"

import { IconComponents } from "@pixelshades/ui/icons"

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

	return (
		<Command.Dialog open={open} onOpenChange={handleOnOpen}>
			<Command searchField={<Command.Search />}>
				<Command.Group heading="Components">
					{components.map((value) => (
						<Command.Item
							before={
								<div className="rounded-md border border-border bg-subtle p-2">
									<IconComponents className="size-4" />
								</div>
							}
							key={value.path}
							href={value.permalink}
							label={value.title}
							textValue={value.title}
							description={value.description}
						/>
					))}
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
