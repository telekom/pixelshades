import { Button, Command } from "@pixelshades/ui/components"
import { Apple, CommandIcon, GlassWater } from "@pixelshades/ui/icons"
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
		<Command.Dialog shortcut={["Meta", "KeyB"]} open={open} onOpenChange={setOpen}>
			<Command searchField={<Command.Search />}>
				<Command.Group heading="Fruits">
					{fruits.map((fruit, index) => (
						<Command.Item
							key={fruit.name + index}
							before={<Apple />}
							title={fruit.name}
							description={fruit.description}
						/>
					))}
				</Command.Group>
				<Command.Group heading="Drinks">
					{drinks.map((drink) => (
						<Command.Item
							title={drink.name}
							description={drink.description}
							key={drink.name}
							before={<GlassWater />}
							className={"items-center"}
						/>
					))}
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
