import { AutoForm } from "@pixelshades/tanstack-auto-form"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

export const Route = createFileRoute("/form2")({
	component: FormPage,
})

function FormPage() {
	return (
		<div>
			<AutoForm
				formSchema={z.object({
					name: z.string().min(2),
					age: z.number().min(18),
				})}
				onSubmit={async (data) => {
					console.log(data.value)
				}}
			/>
		</div>
	)
}
