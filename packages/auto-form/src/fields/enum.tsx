import { Select } from "@pixelshades/ui/components"
import type * as z from "zod"
import { FormControl, FormItem } from "~/components/ui/form"
import type { AutoFormInputComponentProps } from "../types"
import { getBaseSchema } from "../utils"

export default function AutoFormEnum({
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

	function findItem(value: any) {
		return values.find((item) => item[0] === value)
	}

	return (
		<FormItem>
			<FormControl>
				<Select
					label={label}
					helperText={fieldConfigItem.description}
					isRequired={isRequired}
					onSelectionChange={field.onChange}
					placeholder="Select an option"
					defaultValue={field.value}
					{...fieldProps}
				>
					{values.map(([value, label]) => (
						<Select.Item key={value} id={value}>
							{label}
						</Select.Item>
					))}
				</Select>
			</FormControl>
		</FormItem>
	)
}
