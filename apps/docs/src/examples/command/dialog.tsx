import { Command } from "@pixelshades/ui/components"
import { IconApple, IconGlass } from "@pixelshades/ui/icons"

export default function Example() {
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
		<Command.Dialog shortcut={["Meta", "KeyJ"]}>
			<Command searchField={<Command.Search />}>
				<Command.Group heading="Fruits">
					{fruits.map((fruit) => (
						<Command.Item
							key={fruit.name}
							before={<IconApple />}
							className={"items-center"}
							textValue={fruit.name}
							label={fruit.name}
							onAction={() => alert(fruit.name)}
							description={fruit.description}
						/>
					))}
				</Command.Group>
				<Command.Group heading="Drinks">
					{drinks.map((drink) => (
						<Command.Item
							key={drink.name}
							before={<IconGlass />}
							className={"items-center"}
							textValue={drink.name}
							label={drink.name}
							onAction={() => alert(drink.name)}
							description={drink.description}
						/>
					))}
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
