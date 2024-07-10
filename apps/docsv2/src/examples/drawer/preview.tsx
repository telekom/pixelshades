import { Button, Drawer } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Drawer.Trigger>
			<Button variant="outline">open default drawer</Button>
			<Drawer>
				<Drawer.Content>
					<>
						<Drawer.Header className={"flex-row items-center justify-between space-y-0"}>
							<Drawer.Title>Drawer Title</Drawer.Title>
						</Drawer.Header>
						<div>Drawer Content</div>
					</>
				</Drawer.Content>
			</Drawer>
		</Drawer.Trigger>
	)
}
