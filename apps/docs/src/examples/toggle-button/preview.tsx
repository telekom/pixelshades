import React from "react"
import { ToggleButton } from "@dv/ui/components"
import { Snail } from "@dv/ui/icons"

export default function Example() {
	return <ToggleButton before={<Snail />}>Toggle</ToggleButton>
}
