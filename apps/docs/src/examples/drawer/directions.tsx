import { Button, DIRECTIONS, Drawer, type DrawerDirection, Select } from "@pixelshades/ui/components"
import React from "react"

export default function Example() {
	const options = DIRECTIONS.map((d) => ({ name: d }))
	const [direction, setDirection] = React.useState<DrawerDirection>("right")

	return (
		<div className="flex flex-col gap-layout-sm">
			<div>
				<Select
					label="Direction"
					items={options}
					selectedKey={direction}
					onSelectionChange={(selected) => setDirection(selected as DrawerDirection)}
				>
					{(item) => <Select.Item id={item.name}>{item.name}</Select.Item>}
				</Select>
			</div>
			<Drawer.Trigger>
				<Button variant="outline">open drawer {direction}</Button>
				<Drawer direction={direction}>
					<Drawer.Content className="h-full">
						{({ close }) => (
							<>
								<Drawer.Header>
									<Drawer.Title>Drawer Title</Drawer.Title>
								</Drawer.Header>
								<div className={direction === "bottom" ? "h-[200px]" : "h-full"}>Drawer Content</div>
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
