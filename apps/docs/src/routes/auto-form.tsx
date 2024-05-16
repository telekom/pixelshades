import { createFileRoute } from "@tanstack/react-router"

import { BasicAutoFormExample } from "@pixelshades/auto-form/examples/basics.tsx"

export const Route = createFileRoute("/auto-form")({
	component: () => (
		<div className="container mx-auto max-w-md space-y-4">
			<BasicAutoFormExample />
		</div>
	),
})
