import { Button, Drawer, type DrawerPlacement, PLACEMENTS, Select } from "@pixelshades/ui/components"
import React from "react"

export default function Example() {
	const options = PLACEMENTS.map((d) => ({ name: d }))
	const [placement, setPlacement] = React.useState<DrawerPlacement>("right")

	return (
		<div className="flex flex-col gap-layout-sm">
			<div>
				<Select
					label="Direction"
					items={options}
					selectedKey={placement}
					onSelectionChange={(selected) => setPlacement(selected as DrawerPlacement)}
				>
					{(item) => <Select.Item id={item.name}>{item.name}</Select.Item>}
				</Select>
			</div>
			<Drawer.Trigger>
				<Button variant="outline">open drawer {placement}</Button>
				<Drawer placement={placement}>
					<Drawer.Content className="h-full">
						{({ close }) => (
							<>
								<Drawer.Header>
									<Drawer.Title>Drawer Title</Drawer.Title>
								</Drawer.Header>
								<div className={placement === "bottom" ? "h-[200px]" : "h-full"}>Drawer Content</div>
								<Drawer.Footer>
									<Button onPress={close}>Close Drawer</Button>
								</Drawer.Footer>
							</>
						)}
					</Drawer.Content>
				</Drawer>
			</Drawer.Trigger>
		</div>
	)
}
