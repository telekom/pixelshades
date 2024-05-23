import { Command } from "@pixelshades/ui/components"
import { Apple, GlassWater } from "@pixelshades/ui/icons"

export default function Example() {
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
		<Command.Dialog shortcut={["Meta", "KeyJ"]}>
			<Command searchField={<Command.Search />}>
				<Command.Group heading="Fruits">
					{fruits.map((fruit) => (
						<Command.Item
							key={fruit.name}
							before={<Apple />}
							className={"items-center"}
							searchValues={[fruit.name, fruit.description || ""]}
							title={fruit.name}
							description={fruit.description}
						/>
					))}
				</Command.Group>
				<Command.Group heading="Drinks">
					{drinks.map((drink) => (
						<Command.Item
							key={drink.name}
							before={<GlassWater />}
							className={"items-center"}
							searchValues={[drink.name, drink.description || ""]}
							title={drink.name}
							description={drink.description}
						/>
					))}
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
