import { Button, Card, Input, Label, Select } from "@pixelshades/ui/components";

export default function Example() {
	return (
		<Card className="w-[350px]">
			<Card.Header>
				<Card.Title>Create project</Card.Title>
				<Card.Description>Deploy your new project in one-click.</Card.Description>
			</Card.Header>
			<Card.Content>
				<form>
					<div className="grid w-full items-center gap-lg">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Name of your project" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Select label="Framework">
								<Select.Item id="next">Next.js</Select.Item>
								<Select.Item id="sveltekit">SvelteKit</Select.Item>
								<Select.Item id="astro">Astro</Select.Item>
								<Select.Item id="nuxt">Nuxt.js</Select.Item>
							</Select>
						</div>
					</div>
				</form>
			</Card.Content>
			<Card.Footer className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
			</Card.Footer>
		</Card>
	);
}
