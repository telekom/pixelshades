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
		<Command searchField={<Command.Search />}>
			<Command.Group heading="Fruits">
				{fruits.map((fruit, index) => (
					<Command.Item
						key={fruit.name + index}
						before={<IconApple />}
						onAction={() => alert(fruit.name)}
						searchValues={[fruit.name, fruit.description || ""]}
						className={"items-center"}
						title={fruit.name}
						description={fruit.description}
					/>
				))}
			</Command.Group>
			<Command.Group heading="Drinks">
				{drinks.map((drink) => (
					<Command.Item
						key={drink.name}
						before={<IconGlass />}
						onAction={() => alert(drink.name)}
						title={drink.name}
						description={drink.description}
					/>
				))}
			</Command.Group>
		</Command>
	)
}
