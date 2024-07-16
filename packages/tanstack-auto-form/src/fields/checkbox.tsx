import { Checkbox } from "@pixelshades/ui/components"
import type { AutoFormInputComponentProps } from "../types"

export default function AutoFormCheckbox({
	label,
	isRequired,
	field,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	return (
		<Checkbox
			checked={field.state.value}
			label={label}
			isRequired={isRequired}
			helperText={fieldConfigItem.description}
			{...fieldProps}
		/>
	)
}
