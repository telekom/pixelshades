import { Tabs } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex size-full flex-row flex-wrap items-center justify-center gap-md">
			<Tabs variant="pill">
				<Tabs.List aria-label="Dashbord Panels">
					<Tabs.Tab id="panel-1">Panel 1</Tabs.Tab>
					<Tabs.Tab id="panel-2">Panel 2</Tabs.Tab>
					<Tabs.Tab id="panel-3">Panel 3</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel id="panel-1">Panel 1</Tabs.Panel>
				<Tabs.Panel id="panel-2">Panel 2</Tabs.Panel>
				<Tabs.Panel id="panel-3">Panel 3</Tabs.Panel>
			</Tabs>

			<Tabs variant="line">
				<Tabs.List aria-label="Dashbord Panels">
					<Tabs.Tab id="panel-1">Panel 1</Tabs.Tab>
					<Tabs.Tab id="panel-2">Panel 2</Tabs.Tab>
					<Tabs.Tab id="panel-3">Panel 3</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel id="panel-1">Panel 1</Tabs.Panel>
				<Tabs.Panel id="panel-2">Panel 2</Tabs.Panel>
				<Tabs.Panel id="panel-3">Panel 3</Tabs.Panel>
			</Tabs>
		</div>
	)
}
