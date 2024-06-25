"use client"

import * as z from "zod"
import { AutoForm, AutoFormSubmit } from ".."

enum Color {
	Red = "red",
	Green = "green",
	Blue = "blue",
}

const formSchema = z.object({
	basicEnum: z.enum(["a", "b", "c"]),
	nativeEnum: z.nativeEnum(Color),
})

export function BasicEnumAutoFormExample() {
	return (
		<div className="mx-auto my-6 max-w-lg">
			<AutoForm
				formSchema={formSchema}
				onSubmit={async (e) => console.log(e)}
				fieldConfig={{
					basicEnum: {
						fieldType: "combobox",
					},
				}}
			>
				<AutoFormSubmit>Send now</AutoFormSubmit>
			</AutoForm>
		</div>
	)
}
