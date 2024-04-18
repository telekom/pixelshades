import { Button, Menu, MenuContent, MenuHeader, MenuItem, MenuSection, MenuSeperator } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div>
			<Menu>
				<Button>Open Menu</Button>

				<MenuContent>
					<MenuSection>
						<MenuHeader>User Pfoile</MenuHeader>
					</MenuSection>
					<MenuSeperator />

					<MenuItem>Some Menu Item</MenuItem>
					<MenuItem>Another Menu Item</MenuItem>
					<MenuItem>Seperated Last Menu Item</MenuItem>
					<MenuSeperator />
				</MenuContent>
			</Menu>
		</div>
	)
}
