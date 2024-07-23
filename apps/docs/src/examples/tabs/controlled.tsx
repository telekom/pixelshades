"use client"

import { Tabs, Typography } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState("panel-1")

	return (
		<div className="flex flex-col gap-lg">
			<Typography className="absolute top-0 left-0">
				<span>Selected Key: </span>
				{value}
			</Typography>
			<Tabs variant="pill" selectedKey={value} onSelectionChange={(value) => setValue(value.toString())}>
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
