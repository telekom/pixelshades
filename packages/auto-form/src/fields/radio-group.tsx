import { RadioGroup } from "@pixelshades/ui/components"
import type * as z from "zod"
import type { AutoFormInputComponentProps } from "../types"
import { getBaseSchema } from "../utils"

export function AutoFormRadioGroup({
	label,
	isRequired,
	field,
	zodItem,
	fieldProps,
	fieldConfigItem,
}: AutoFormInputComponentProps) {
	const baseValues = (getBaseSchema(zodItem) as unknown as z.ZodEnum<any>)._def.values

	let values: string[] = []
	if (!Array.isArray(baseValues)) {
		values = Object.entries(baseValues).map((item) => item[0])
	} else {
		values = baseValues
	}

	return (
		<RadioGroup
			orientation="vertical"
			label={label}
			isRequired={isRequired}
			helperText={fieldConfigItem.description}
			onValueChange={field.handleChange}
			onBlur={field.handleBlur}
			{...fieldProps}
		>
			{values?.map((value) => (
				<RadioGroup.Item value={value} key={value} id={value}>
					{value}
				</RadioGroup.Item>
			))}
		</RadioGroup>
	)
}
