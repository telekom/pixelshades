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
		<Command shortcut={["Meta", "KeyJ"]} searchField={<Command.Search />}>
			<Command.Group heading="Fruits">
				{fruits.map((fruit) => (
					<Command.Item
						key={fruit.name}
						before={<Apple />}
						className={"items-center"}
						searchValues={[fruit.name, fruit.description || ""]}
					>
						<div className="flex flex-col items-center gap-2">
							<Command.ItemTitle>{fruit.name}</Command.ItemTitle>
							{fruit.description && (
								<Command.ItemDescription>{fruit.description}</Command.ItemDescription>
							)}
						</div>
					</Command.Item>
				))}
			</Command.Group>
			<Command.Group heading="Drinks">
				{drinks.map((drink) => (
					<Command.Item
						key={drink.name}
						before={<GlassWater />}
						className={"items-center"}
						searchValues={[drink.name, drink.description || ""]}
					>
						<div className="flex flex-col gap-2">
							<Command.ItemTitle>{drink.name}</Command.ItemTitle>
							{drink.description && (
								<Command.ItemDescription>{drink.description}</Command.ItemDescription>
							)}
						</div>
					</Command.Item>
				))}
			</Command.Group>
		</Command>
	)
}
