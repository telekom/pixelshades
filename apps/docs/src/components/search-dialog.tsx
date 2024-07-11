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
					<If
						condition={components.length > 0 || inputValue.length !== 0}
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
						{components.map((value) => (
							<Command.Item
								before={
									<div className="rounded-md border border-border bg-subtle p-2">
										<IconComponents className="size-4" />
									</div>
								}
								key={value.path}
								href={value.permalink}
								title={value.title}
								description={value.description}
							/>
						))}
					</If>
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
