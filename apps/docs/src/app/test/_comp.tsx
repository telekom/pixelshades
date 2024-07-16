"use client"

import { AutoForm } from "@pixelshades/tanstack-auto-form"
import { Button } from "@pixelshades/ui/components"
import { z } from "zod"

const schema = z.object({
	name: z.string().min(2),
	age: z.number().min(18),
})

export function Test() {
	return (
		<AutoForm onSubmit={async (v) => console.log("Submitted", v)} formSchema={schema}>
			<Button type="submit">Submit</Button>
		</AutoForm>
	)
}
