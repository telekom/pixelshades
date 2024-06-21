import { ComboBox, Select } from "@pixelshades/ui/components"
import type * as z from "zod"
import { FormControl, FormItem } from "../commons/hook-form"
import type { AutoFormInputComponentProps } from "../types"
import { getBaseSchema } from "../utils"

export default function AutoFormComboBox({
	label,
	isRequired,
	field,
	fieldConfigItem,
	zodItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	const baseValues = (getBaseSchema(zodItem) as unknown as z.ZodEnum<any>)._def.values

	let values: [string, string][] = []
	if (!Array.isArray(baseValues)) {
		values = Object.entries(baseValues)
	} else {
		values = baseValues.map((value) => [value, value])
	}

	return (
		<FormItem>
			<FormControl>
				<ComboBox
					label={label}
					helperText={fieldConfigItem.description}
					isRequired={isRequired}
					placeholder="Select an option"
					onInputChange={field.onChange}
					inputValue={field.value}
					{...fieldProps}
				>
					{values.map(([value, label]) => (
						<ComboBox.Item key={value} id={value}>
							{label}
						</ComboBox.Item>
					))}
				</ComboBox>
			</FormControl>
		</FormItem>
	)
}
