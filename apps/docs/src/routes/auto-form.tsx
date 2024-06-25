import { createFileRoute } from "@tanstack/react-router"

import { BasicAutoFormExample } from "@pixelshades/auto-form/examples/basics.tsx"
import { DatesAutoFormExample } from "@pixelshades/auto-form/examples/dates.tsx"
import { BasicEnumAutoFormExample } from "@pixelshades/auto-form/examples/enum.tsx"
import { Tabs } from "@pixelshades/ui/components"

export const Route = createFileRoute("/auto-form")({
	component: () => (
		<div className="container mx-auto max-w-md space-y-4">
			<Tabs>
				<Tabs.List>
					<Tabs.Tab id="basic">Basic</Tabs.Tab>
					<Tabs.Tab id="dates">Dates</Tabs.Tab>
					<Tabs.Tab id="enum">Enum</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel id="basic">
					<BasicAutoFormExample />
				</Tabs.Panel>
				<Tabs.Panel id="dates">
					<DatesAutoFormExample />
				</Tabs.Panel>
				<Tabs.Panel id="enum">
					<BasicEnumAutoFormExample />
				</Tabs.Panel>
			</Tabs>
		</div>
	),
})
