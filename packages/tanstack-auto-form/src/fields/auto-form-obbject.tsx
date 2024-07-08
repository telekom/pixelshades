import type { useForm } from "@tanstack/react-form"
import { z } from "zod"
import type { Dependency, FieldConfig, FieldConfigItem } from "../types"
import { beautifyObjectName, getBaseType, zodToHtmlInputProps } from "../utils"

export default function AutoFormObject<SchemaType extends z.ZodObject<any, any>>({
	schema,
	form,
	fieldConfig,
	path = [],
	dependencies = [],
	className,
}: {
	className?: string
	schema: SchemaType
	form: ReturnType<typeof useForm>
	fieldConfig?: FieldConfig<z.infer<SchemaType>>
	path?: string[]
	dependencies?: Dependency<z.infer<SchemaType>>[]
}) {
	if (!schema || !schema.shape) {
		return null
	}

	const { shape } = schema

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
		<>
			{Object.keys(shape).map((name) => {
				let item = shape[name] as z.ZodAny
				item = handleIfZodNumber(item) as z.ZodAny
				const zodBaseType = getBaseType(item)
				const itemName = item._def.description ?? beautifyObjectName(name)
				const key = [...path, name].join(".")

				const {
					isHidden,
					isDisabled,
					isRequired: isRequiredByDependency,
					overrideOptions,
				} = resolveDependencies(dependencies, name, watch)
				if (isHidden) {
					return null
				}

				if (zodBaseType === "ZodObject") {
					return (
						<AccordionItem value={name} key={key} className="border-none">
							<AccordionTrigger>{itemName}</AccordionTrigger>
							<AccordionContent className="p-md">
								<AutoFormObject
									schema={item as unknown as z.ZodObject<any, any>}
									form={form}
									fieldConfig={(fieldConfig?.[name] ?? {}) as FieldConfig<z.infer<typeof item>>}
									path={[...path, name]}
								/>
							</AccordionContent>
						</AccordionItem>
					)
				}
				if (zodBaseType === "ZodArray") {
					return (
						<AutoFormArray
							key={key}
							name={name}
							item={item as unknown as z.ZodArray<any>}
							form={form}
							fieldConfig={fieldConfig?.[name] ?? {}}
							path={[...path, name]}
						/>
					)
				}

				const fieldConfigItem: FieldConfigItem = fieldConfig?.[name] ?? {}
				const zodInputProps = zodToHtmlInputProps(item)
				const isRequired =
					isRequiredByDependency || zodInputProps.required || fieldConfigItem.inputProps?.required || false

				if (overrideOptions) {
					item = z.enum(overrideOptions) as unknown as z.ZodAny
				}

				return (
					<form.Field
						name={key}
						key={key}
						// biome-ignore lint/correctness/noChildrenProp: <explanation>
						children={(field) => {
							const inputType =
								fieldConfigItem.fieldType ?? DEFAULT_ZOD_HANDLERS[zodBaseType] ?? "fallback"

							const InputComponent =
								typeof inputType === "function" ? inputType : INPUT_COMPONENTS[inputType]

							const ParentElement = fieldConfigItem.renderParent ?? DefaultParent

							const defaultValue = fieldConfigItem.inputProps?.defaultValue
							const value = field.getValue() ?? defaultValue ?? ""

							const fieldProps = {
								...zodToHtmlInputProps(item),
								...field,
								...fieldConfigItem.inputProps,
								disabled: fieldConfigItem.inputProps?.disabled || isDisabled,
								ref: undefined,
								value: value,
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
										label={itemName}
										isRequired={isRequired}
										zodItem={item}
										fieldProps={fieldProps}
										className={fieldProps.className}
									/>
								</ParentElement>
							)
						}}
					/>
				)
			})}
		</>
	)
}
