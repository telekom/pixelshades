import { cn } from "@pixelshades/cn"
import type * as z from "zod"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../commons/temp/temp/accordion"
import { DEFAULT_ZOD_HANDLERS, INPUT_COMPONENTS } from "../config"
import { useFormContext } from "../form-provider"
import type { FieldConfig, FieldConfigItem } from "../types"
import { beautifyObjectName, getBaseSchema, getBaseType, zodToHtmlInputProps } from "../utils"

function DefaultParent({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}

export function AutoFormObject<SchemaType extends z.ZodObject<any, any>>({
	schema,
	fieldConfig,
	path = [],
	className,
}: {
	className?: string
	schema: SchemaType | z.ZodEffects<SchemaType>
	fieldConfig?: FieldConfig<z.infer<SchemaType>>
	path?: string[]
}) {
	const { Field } = useFormContext()

	if (!schema) {
		return null
	}
	const { shape } = getBaseSchema<SchemaType>(schema) || {}

	if (!shape) {
		return null
	}

	const handleIfZodNumber = (item: z.ZodAny) => {
		const isZodNumber = (item as any)._def.typeName === "ZodNumber"
		const isInnerZodNumber = (item._def as any).innerType?._def?.typeName === "ZodNumber"

		if (isZodNumber) {
			;(item as any)._def.coerce = true
		} else if (isInnerZodNumber) {
			;(item._def as any).innerType._def.coerce = true
		}

		return item
	}

	return (
		<Accordion type="multiple" className={cn("space-y-layout-sm border-none", className)}>
			{Object.keys(shape).map((name) => {
				let item = shape[name] as z.ZodAny
				item = handleIfZodNumber(item) as z.ZodAny
				const zodBaseType = getBaseType(item)
				const itemName = item._def.description ?? beautifyObjectName(name)
				const key = [...path, name].join(".")

				const fieldConfigItem: FieldConfigItem = fieldConfig?.[name] ?? {}

				const label = fieldConfigItem.label ?? itemName

				// TODO: Enable dependency resolution
				// const {
				// 	isHidden,
				// 	isDisabled,
				// 	isRequired: isRequiredByDependency,
				// 	overrideOptions,
				// } = resolveDependencies(dependencies, name)
				// if (isHidden) {
				// 	return null
				// }

				if (zodBaseType === "ZodObject") {
					return (
						<AccordionItem value={name} key={key} className="border-none">
							<AccordionTrigger>{label}</AccordionTrigger>
							<AccordionContent className="p-md">
								<AutoFormObject
									schema={item as unknown as z.ZodObject<any, any>}
									fieldConfig={(fieldConfig?.[name] ?? {}) as FieldConfig<z.infer<typeof item>>}
									path={[...path, name]}
								/>
							</AccordionContent>
						</AccordionItem>
					)
				}
				if (zodBaseType === "ZodArray") {
					return <div>ARRAY HERE</div>
					// return (
					// 	<AutoFormArray
					// 		key={key}
					// 		name={name}
					// 		item={item as unknown as z.ZodArray<any>}
					// 		fieldConfig={fieldConfig?.[name] ?? {}}
					// 		path={[...path, name]}
					// 	/>
					// )
				}

				const zodInputProps = zodToHtmlInputProps(item)

				// TODO:
				// const isRequired =
				// 	isRequiredByDependency || zodInputProps.required || fieldConfigItem.inputProps?.required || false

				const isRequired = zodInputProps.required || fieldConfigItem.inputProps?.required || false

				// if (overrideOptions) {
				// 	item = z.enum(overrideOptions) as unknown as z.ZodAny
				// }

				return (
					<Field
						name={key}
						key={key}
						validators={{
							onChange: item,
							...fieldConfigItem.fieldValidators,
						}}
						// biome-ignore lint/correctness/noChildrenProp: <explanation>
						children={(field) => {
							const inputType =
								fieldConfigItem.fieldType ?? DEFAULT_ZOD_HANDLERS[zodBaseType] ?? "fallback"

							const InputComponent =
								typeof inputType === "function" ? inputType : INPUT_COMPONENTS[inputType]

							const ParentElement = fieldConfigItem.renderParent ?? DefaultParent

							const fieldProps = {
								...zodInputProps,
								...fieldConfigItem.inputProps,

								errorMessage: field.state.meta.errors.length ? field.state.meta.errors.join(",") : null,
								isDisabled: fieldConfigItem.inputProps?.disabled,
								isInvalid: field.state.meta.errors.length > 0,
								isLoading: field.state.meta.isValidating,
								// || isDisabled,
								ref: undefined,

								id: field.name,
								name: field.name,
							}

							if (InputComponent === undefined) {
								return <></>
							}

							return (
								<ParentElement key={`${key}.parent`}>
									<InputComponent
										zodInputProps={zodInputProps}
										field={field}
										fieldConfigItem={fieldConfigItem}
										label={label}
										isRequired={isRequired}
										zodItem={item}
										fieldProps={fieldProps}
										className={fieldProps.className}
									/>
									{field.state.meta.isValidating ? "Validating..." : null}
								</ParentElement>
							)
						}}
					/>
				)
			})}
		</Accordion>
	)
}
