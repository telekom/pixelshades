import { Button, Drawer } from "@pixelshades/ui/components"
import { SquareX } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Drawer.Trigger>
			<Button variant="outline">open default drawer</Button>
			<Drawer>
				<Drawer.Content hideCloseButton={true}>
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
