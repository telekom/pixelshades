import { Button, Command } from "@pixelshades/ui/components";
import { Apple, CommandIcon, GlassWater } from "@pixelshades/ui/icons";
import { useState } from "react";

export default function Example() {
	const [inputValue, setInputValue] = useState("");
	const [open, setOpen] = useState(false);

	const fruits = [
		{ name: "Apple", description: "Red apple" },
		{ name: "Apple", description: "Green apple" },
		{ name: "Banana" },
	];

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	];

	return (
		<div>
			<Button onPress={() => setOpen(true)}>
				Open <CommandIcon className="size-4" /> B
			</Button>
			<Command
				shortcut={["Meta", "KeyB"]}
				searchValue={inputValue}
				onSearchChange={setInputValue}
				searchField={<Command.Search />}
				onOpenChange={setOpen}
				open={open}
				disableIntegratedSearch
			>
				<Command.Group heading="Fruits">
					{fruits.map((fruit, index) => (
						<Command.Item key={fruit.name + index} before={<Apple />} className={"items-center"}>
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
						<Command.Item key={drink.name} before={<GlassWater />} className={"items-center"}>
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
		</div>
	);
}
