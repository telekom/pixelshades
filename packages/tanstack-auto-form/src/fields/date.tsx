import { DatePicker } from "@pixelshades/ui/components"
import type { AutoFormInputComponentProps } from "../types"

export default function AutoFormDate({
	label,
	isRequired,
	field,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	return (
		<DatePicker
			{...fieldProps}
			defaultValue={field.state.value}
			onChange={field.handleChange}
			onBlur={field.handleBlur}
			isRequired={isRequired}
			label={label}
			helperText={fieldConfigItem.description}
		/>
	)
}
