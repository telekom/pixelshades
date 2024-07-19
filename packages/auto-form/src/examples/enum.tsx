"use client"

import test from "node:test"
import * as z from "zod"
import { AutoForm, AutoFormSubmit } from ".."

enum Color {
	Red = "red",
	Green = "green",
	Blue = "blue",
}

const FakeEnum = {
	Red: "red",
	Green: "green",
	Blue: "blue",
}

const Testenum = {
	Testclient: "e0d2e558-020b-4fff-aa8c-6c59ebe13cf8",
	WOW: "93637e51-4fa6-4c74-8e15-42373285b90d",
	adsdas: "8306a2fe-2131-4e12-ae06-5b066c8dabc2",
}

const formSchema = z.object({
	// basicEnum: z.enum(["a", "b", "c"]),
	// nativeEnum: z.nativeEnum(Color),
	testEnum: z.nativeEnum(Testenum),
	// nativeEnumWinkWink: z.nativeEnum(FakeEnum),
})

export function BasicEnumAutoFormExample() {
	return (
		<div className="mx-auto my-6 max-w-lg">
			<AutoForm
				formSchema={formSchema}
				onSubmit={async (e) => console.log(e)}
				fieldConfig={{
					testEnum: {
						fieldType: "combobox",
					},
				}}
			>
				<AutoFormSubmit>Send now</AutoFormSubmit>
			</AutoForm>
		</div>
	)
}
