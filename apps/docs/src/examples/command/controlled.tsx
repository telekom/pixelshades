import { Command } from "@pixelshades/ui/components"
import { IconApple, IconGlass } from "@pixelshades/ui/icons"
import { useState } from "react"

export default function Example() {
	const [inputValue, setInputValue] = useState("")
	const [open, setOpen] = useState(false)

	const fruits = [
		{ name: "Red Apple", description: "Red apple" },
		{ name: "Green Apple", description: "Green apple" },
		{ name: "Banana" },
	]

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	]

	return (
		<Command.Dialog shortcut={["Meta", "KeyB"]} open={open} onOpenChange={setOpen}>
			<Command
				searchField={
					<Command.Search value={inputValue} onChange={(v) => setInputValue(v.currentTarget.value)} />
				}
			>
				<Command.Group heading="Fruits">
					{fruits.map((fruit, index) => (
						<Command.Item
							key={fruit.name + index}
							before={<IconApple />}
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
							before={<IconGlass />}
							className={"items-center"}
						/>
					))}
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
