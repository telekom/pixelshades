import { Tab, TabPanel, Tabs, TabsList } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Tabs>
			<TabsList aria-label="Dashbord Panels">
				<Tab id="panel-1">Panel 1</Tab>
				<Tab id="panel-2">Panel 2</Tab>
				<Tab id="panel-3">Panel 3</Tab>
			</TabsList>
			<TabPanel id="panel-1">Panel 1</TabPanel>
			<TabPanel id="panel-2">Panel 2</TabPanel>
			<TabPanel id="panel-3">Panel 3</TabPanel>
		</Tabs>
	)
}
