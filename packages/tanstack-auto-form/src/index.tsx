import { type FormApi, useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"
import { z } from "zod"
import type { ZodObjectOrWrapped } from "./types"

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

	console.log(form)

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
					<form.Field
						name="name"
						validatorAdapter={zodValidator()}
						validators={{
							onChange: z.string().min(3, "First name must be at least 3 characters"),
						}}
					>
						{(field) => (
							<div>
								<input
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
							</div>
						)}
					</form.Field>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
