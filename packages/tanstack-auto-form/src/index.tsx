import { type FormApi, useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"
import type { z } from "zod"
import type { ZodObjectOrWrapped } from "./types"

import { NumberField } from "@pixelshades/ui/components"
import { getObjectFormSchema } from "./utils"

export type AutoFormProps<SchemaType extends ZodObjectOrWrapped> = {
	formSchema: SchemaType
	defaultValues?: Partial<z.infer<SchemaType>>
	onSubmit?: (data: {
		value: z.infer<SchemaType>
		formApi: FormApi<z.infer<SchemaType>, ReturnType<typeof zodValidator>>
	}) => Promise<any>

	debounceMs?: number
}

export const AutoForm = <SchemaType extends ZodObjectOrWrapped>({
	formSchema,
	debounceMs,
	defaultValues,
	onSubmit,
}: AutoFormProps<SchemaType>) => {
	const form = useForm({
		asyncDebounceMs: debounceMs,
		defaultValues,
		onSubmit: onSubmit,
		validatorAdapter: zodValidator(),
	})

	const objectSchema = getObjectFormSchema(formSchema)

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					e.stopPropagation()
					form.handleSubmit()
				}}
			>
				<div>
					{Object.entries(objectSchema.shape).map(([key, value]) => {
						console.log(value, key)
						return (
							<form.Field
								key={key}
								name={key}
								validatorAdapter={zodValidator()}
								validators={{
									onChange: value as z.ZodAny,
								}}
							>
								{(field) => (
									<div>
										<NumberField
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											type="number"
											validationBehavior="aria"
											onChange={(e) => field.handleChange(e)}
										/>
										<p>{field.state.meta.errors}</p>
									</div>
								)}
							</form.Field>
						)
					})}
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
