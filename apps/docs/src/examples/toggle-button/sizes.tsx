import { ToggleButton } from "@pixelshades/ui/components"
import React from "react"

export default function Example() {
	return (
		<div className="flex flex-col gap-2">
			<ToggleButton size="xs">Toggle</ToggleButton>
			<ToggleButton size="sm">Toggle</ToggleButton>
			<ToggleButton size="md">Toggle</ToggleButton>
			<ToggleButton size="lg">Toggle</ToggleButton>
		</div>
	)
}
