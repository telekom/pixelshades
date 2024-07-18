import { Select } from "@pixelshades/ui/components"
import type * as z from "zod"
import type { AutoFormInputComponentProps } from "../types"
import { getBaseSchema } from "../utils"

export const transformEnumValues = (values: any) => {
	if (!Array.isArray(values)) {
		return Object.entries(values)
	}

	return values.map((value) => [value, value])
}

export function AutoFormEnum({
	label,
	isRequired,
	field,
	fieldConfigItem,
	zodItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	const baseValues = (getBaseSchema(zodItem) as unknown as z.ZodEnum<any>)._def.values

	const values = transformEnumValues(baseValues)

	return (
		<Select
			label={label}
			helperText={fieldConfigItem.description}
			isRequired={isRequired}
			onSelectionChange={field.handleChange}
			onBlur={field.handleBlur}
			placeholder="Select an option"
			defaultSelectedKey={field.state.value}
			{...fieldProps}
		>
			{values.map(([label, value]) => (
				<Select.Item key={value} id={value}>
					{label}
				</Select.Item>
			))}
		</Select>
	)
}
