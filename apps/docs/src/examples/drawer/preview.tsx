import { Button, Drawer } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Drawer.Trigger>
			<Button variant="outline">open drawer</Button>
			<Drawer>
				<Drawer.Content className="h-full">
					{({ close }) => (
						<>
							<Drawer.Header>
								<Drawer.Title>Drawer Title</Drawer.Title>
							</Drawer.Header>
							<div className="h-full">Drawer Content</div>
							<Drawer.Footer>
								<Button onPress={close}>Close Drawer</Button>
							</Drawer.Footer>
						</>
					)}
				</Drawer.Content>
			</Drawer>
		</Drawer.Trigger>
	)
}
