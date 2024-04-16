import {
	Button,
	Command,
	CommandGroup,
	CommandItem,
	CommandItemDescription,
	CommandItemTitle,
	CommandSearch,
	Typography,
} from "@dv/ui/components"
import { Apple, CommandIcon, GlassWater } from "@dv/ui/icons"
import { useState } from "react"

export default function Example() {
	const [inputValue, setInputValue] = useState("")
	const [open, setOpen] = useState(false)

	const fruits = [
		{ name: "Apple", description: "Red apple" },
		{ name: "Apple", description: "Green apple" },
		{ name: "Banana" },
	]

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	]

	return (
		<div>
			<Button onPress={() => setOpen(true)}>
				Open <CommandIcon className="size-4" /> B
			</Button>
			<Command
				shortcut={["Meta", "KeyB"]}
				searchValue={inputValue}
				onSearchChange={setInputValue}
				searchField={<CommandSearch />}
				onOpenChange={setOpen}
				open={open}
				disableIntegratedSearch
			>
				<CommandGroup heading="Fruits">
					{fruits.map((fruit, index) => (
						<CommandItem key={fruit.name + index} before={<Apple />} className={"items-center"}>
							<div className="flex flex-col items-center gap-2">
								<CommandItemTitle>{fruit.name}</CommandItemTitle>
								{fruit.description && (
									<CommandItemDescription>{fruit.description}</CommandItemDescription>
								)}
							</div>
						</CommandItem>
					))}
				</CommandGroup>
				<CommandGroup heading="Drinks">
					{drinks.map((drink) => (
						<CommandItem key={drink.name} before={<GlassWater />} className={"items-center"}>
							<div className="flex flex-col gap-2">
								<CommandItemTitle>{drink.name}</CommandItemTitle>
								{drink.description && (
									<CommandItemDescription>{drink.description}</CommandItemDescription>
								)}
							</div>
						</CommandItem>
					))}
				</CommandGroup>
			</Command>
		</div>
	)
}
