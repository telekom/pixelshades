import { type FormApi, useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"
import type { z } from "zod"
import type { FieldConfig, ZodObjectOrWrapped } from "./types"

import { Button, Form } from "@pixelshades/ui/components"
import type { ReactNode } from "react"
import { AutoFormObject } from "./fields/auto-form-object"
import { FormProvider } from "./form-provider"
import { getObjectFormSchema } from "./utils"

export type AutoFormProps<SchemaType extends ZodObjectOrWrapped> = {
	formSchema: SchemaType
	defaultValues?: Partial<z.infer<SchemaType>>
	onSubmit?: (data: {
		value: z.infer<SchemaType>
		formApi: FormApi<z.infer<SchemaType>, ReturnType<typeof zodValidator>>
	}) => Promise<any>

	children?: ReactNode
	innerClassName?: string

	debounceMs?: number

	fieldConfig?: FieldConfig<z.infer<SchemaType>>
}

export const AutoForm = <SchemaType extends ZodObjectOrWrapped>({
	formSchema,
	debounceMs,
	defaultValues,
	children,
	innerClassName,
	fieldConfig,
	onSubmit,
}: AutoFormProps<SchemaType>) => {
	const form = useForm({
		asyncDebounceMs: debounceMs,
		defaultValues,
		onSubmit: onSubmit,
		validatorAdapter: zodValidator(),
	})

	const objectFormSchema = getObjectFormSchema(formSchema)

	return (
		<div className="w-full">
			<FormProvider form={form as ReturnType<typeof useForm>}>
				<Form
					onSubmit={(e) => {
						e.preventDefault()
						e.stopPropagation()

						form.handleSubmit()
					}}
				>
					<AutoFormObject className={innerClassName} schema={objectFormSchema} fieldConfig={fieldConfig} />

					{children}

					<form.Subscribe
						selector={(state) => [state.canSubmit, state.isSubmitting]}
						// biome-ignore lint/correctness/noChildrenProp: <explanation>
						children={([canSubmit, isSubmitting]) => {
							return (
								<>
									<Button type="submit" isDisabled={!canSubmit}>
										{isSubmitting ? "..." : "Submit"}
									</Button>
									<Button type="reset" onPress={() => form.reset()}>
										Reset
									</Button>
								</>
							)
						}}
					/>
				</Form>
			</FormProvider>
		</div>
	)
}
