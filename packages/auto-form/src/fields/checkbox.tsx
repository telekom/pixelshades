import { Checkbox } from "@pixelshades/ui/components"
import type { AutoFormInputComponentProps } from "../types"

export function AutoFormCheckbox({
	label,
	isRequired,
	field,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	return (
		<Checkbox
			onChange={field.handleChange}
			onBlur={field.handleBlur}
			defaultSelected={field.state.value}
			label={label}
			isRequired={isRequired}
			helperText={fieldConfigItem.description}
			{...fieldProps}
		/>
	)
}
