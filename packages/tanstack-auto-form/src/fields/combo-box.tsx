import { ComboBox, Select } from "@pixelshades/ui/components"
import type * as z from "zod"
import type { AutoFormInputComponentProps } from "../types"
import { getBaseSchema } from "../utils"
import { transformEnumValues } from "./enum"

export function AutoFormComboBox({
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
		<ComboBox
			label={label}
			helperText={fieldConfigItem.description}
			isRequired={isRequired}
			placeholder="Select an option"
			onSelectionChange={field.handleChange}
			onBlur={field.handleBlur}
			selectedKey={field.state.value}
			{...fieldProps}
		>
			{values.map(([label, value]) => (
				<ComboBox.Item key={value} id={value} value={value}>
					{label}
				</ComboBox.Item>
			))}
		</ComboBox>
	)
}
