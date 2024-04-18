import {
	Command,
	CommandGroup,
	CommandItem,
	CommandItemDescription,
	CommandItemTitle,
	CommandSearch,
} from "@pixelshades/ui/components"
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
		<Command shortcut={["Meta", "KeyX"]} searchField={<CommandSearch />}>
			<CommandGroup heading="Fruits">
				{fruits.map((fruit, index) => (
					<CommandItem
						key={fruit.name + index}
						before={<Apple />}
						searchValues={[fruit.name, fruit.description || ""]}
						className={"items-center"}
					>
						<div className="flex flex-col items-center gap-2">
							<CommandItemTitle>{fruit.name}</CommandItemTitle>
							{fruit.description && <CommandItemDescription>{fruit.description}</CommandItemDescription>}
						</div>
					</CommandItem>
				))}
			</CommandGroup>
			<CommandGroup heading="Drinks">
				{drinks.map((drink) => (
					<CommandItem
						key={drink.name}
						before={<GlassWater />}
						searchValues={[drink.name, drink.description || ""]}
					>
						<div className="flex flex-col gap-2">
							<CommandItemTitle>{drink.name}</CommandItemTitle>
							{drink.description && <CommandItemDescription>{drink.description}</CommandItemDescription>}
						</div>
					</CommandItem>
				))}
			</CommandGroup>
		</Command>
	)
}
