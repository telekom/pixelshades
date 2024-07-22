"use client"

import { type FormApi, useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"
import type { z } from "zod"
import type { FieldConfig, ZodObjectOrWrapped } from "./types"

import { toast } from "@pixelshades/toast"
import { Button, Form } from "@pixelshades/ui/components"
import { type ForwardedRef, type ReactNode, forwardRef } from "react"
import { AutoFormObject } from "./fields/auto-form-object"
import { FormProvider, useFormContext } from "./form-provider"
import { getObjectFormSchema, minDelay } from "./utils"

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
	minSubmitDelay?: number

	toastValues?: {
		loading: string
		success: string
		error: string
	}

	fieldConfig?: FieldConfig<z.infer<SchemaType>>
}

export const BaseAutoForm = <SchemaType extends ZodObjectOrWrapped>(
	{
		formSchema,
		debounceMs,
		defaultValues,
		children,
		innerClassName,
		fieldConfig,
		onSubmit: onSubmitProp,
		minSubmitDelay = 1000,
		toastValues,
	}: AutoFormProps<SchemaType>,
	ref: ForwardedRef<HTMLFormElement>,
) => {
	const form = useForm({
		asyncDebounceMs: debounceMs,
		defaultValues,
		onSubmit: onSubmit,
		validatorAdapter: zodValidator(),
	})

	function onSubmit(data: {
		value: z.infer<SchemaType>
		formApi: FormApi<z.infer<SchemaType>, ReturnType<typeof zodValidator>>
	}) {
		if (onSubmitProp) {
			toast.promise(minDelay(onSubmitProp(data), minSubmitDelay), {
				loading: toastValues?.loading || "Saving Data...",
				success: toastValues?.success || "Sucessfully Saved",
				error: (error) => {
					return (
						String(error) ||
						toastValues?.error ||
						"There was an error saving... Please try again and contact us if it persists."
					)
				},
			})
		}
	}

	const objectFormSchema = getObjectFormSchema(formSchema)

	return (
		<div className="w-full">
			<FormProvider form={form}>
				<Form
					ref={ref}
					onSubmit={(e) => {
						e.preventDefault()
						e.stopPropagation()

						form.handleSubmit()
					}}
				>
					<AutoFormObject className={innerClassName} schema={objectFormSchema} fieldConfig={fieldConfig} />

					{children}
				</Form>
			</FormProvider>
		</div>
	)
}

function AutoFormSubmit({
	children,
	className,
	isDisabled,
}: {
	children?: React.ReactNode
	className?: string
	isDisabled?: boolean
}) {
	const form = useFormContext()

	return (
		<form.Subscribe
			selector={(state) => [state.canSubmit, state.isSubmitting]}
			// biome-ignore lint/correctness/noChildrenProp: <explanation>
			children={([canSubmit, isSubmitting]) => (
				<Button
					isLoading={isSubmitting}
					type="submit"
					isDisabled={isDisabled || !canSubmit}
					className={className}
				>
					{children ?? "Submit"}
				</Button>
			)}
		/>
	)
}

// biome-ignore lint/complexity/noBannedTypes: <explanation>
function fixedForwardRef<T, P = {}>(
	render: (props: P, ref: React.Ref<T>) => React.ReactNode,
): (props: P & React.RefAttributes<T>) => React.ReactNode {
	return forwardRef(render) as any
}

const AutoForm = fixedForwardRef(BaseAutoForm)

export { AutoForm, AutoFormSubmit }
