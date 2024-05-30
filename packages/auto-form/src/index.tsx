"use client"
import type React from "react"
import { type ForwardedRef, type ReactNode, forwardRef, useEffect } from "react"
import { type DefaultValues, type FormState, useForm } from "react-hook-form"
import type { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from "@pixelshades/toast"
import { Button, Form } from "@pixelshades/ui/components"
import { cn } from "@pixelshades/utils/styles"
import { FormProvider } from "./commons/hook-form"
import AutoFormObject from "./fields/object"
import type { Dependency, FieldConfig, ZodObjectOrWrapped } from "./types"
import { getDefaultValues, getObjectFormSchema, minDelay } from "./utils"

function AutoFormSubmit({
	children,
	className,
	isDisabled,
}: {
	children?: React.ReactNode
	className?: string
	isDisabled?: boolean
}) {
	return (
		<Button type="submit" isDisabled={isDisabled} className={className}>
			{children ?? "Submit"}
		</Button>
	)
}

function BaseAutoForm<SchemaType extends ZodObjectOrWrapped>(
	{
		formSchema,
		values: valuesProp,
		onValuesChange: onValuesChangeProp,
		onParsedValuesChange,
		onSubmit: onSubmitProp,
		toastValues,
		fieldConfig,
		children,
		className,
		dependencies,
		minSubmitDelay = 1000,
		defaultValues: cDefaultValues,
	}: {
		formSchema: SchemaType
		values?: Partial<z.infer<SchemaType>>
		onValuesChange?: (values: Partial<z.infer<SchemaType>>) => void
		onParsedValuesChange?: (values: Partial<z.infer<SchemaType>>) => void
		onSubmit?: (values: z.infer<SchemaType>) => Promise<unknown>
		fieldConfig?: FieldConfig<z.infer<SchemaType>>
		children?: ReactNode | ((val: { minSubmitDelay: number } & FormState<any>) => ReactNode)
		className?: string
		dependencies?: Dependency<z.infer<SchemaType>>[]
		defaultValues?: Partial<z.infer<SchemaType>>
		minSubmitDelay?: number
		toastValues?: {
			loading: string
			success: string
			error: string
		}
	},
	ref: ForwardedRef<HTMLFormElement>,
) {
	const objectFormSchema = getObjectFormSchema(formSchema)

	const defaultValues: DefaultValues<z.infer<typeof objectFormSchema>> | null =
		cDefaultValues || getDefaultValues(objectFormSchema)

	const form = useForm<z.infer<typeof objectFormSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValues ?? undefined,
		values: valuesProp,
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		const parsedValues = formSchema.safeParse(values)
		if (parsedValues.success) {
			if (onSubmitProp) {
				toast.promise(minDelay(onSubmitProp(parsedValues.data), minSubmitDelay), {
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
	}

	const values = form.watch()
	// valuesString is needed because form.watch() returns a new object every time
	const valuesString = JSON.stringify(values)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		onValuesChangeProp?.(values)
		const parsedValues = formSchema.safeParse(values)
		if (parsedValues.success) {
			onParsedValuesChange?.(parsedValues.data)
		}
	}, [valuesString])

	return (
		<div className="w-full">
			<FormProvider {...form}>
				<Form
					onSubmit={(e) => {
						form.handleSubmit(onSubmit)(e)
					}}
					className={cn("space-y-5", className)}
					ref={ref}
				>
					<AutoFormObject
						schema={objectFormSchema}
						form={form}
						dependencies={dependencies}
						fieldConfig={fieldConfig}
					/>

					{typeof children === "function" ? children?.({ minSubmitDelay, ...form.formState }) : children}
				</Form>
			</FormProvider>
		</div>
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

export type * from "./types"
