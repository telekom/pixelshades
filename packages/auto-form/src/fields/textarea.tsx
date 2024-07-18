import { TextField } from "@pixelshades/ui/components"
import type { AutoFormInputComponentProps } from "../types"

export function AutoFormTextarea({
	field,
	label,
	isRequired,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps
	const showLabel = _showLabel === undefined ? true : _showLabel

	return (
		<TextField
			multiLine
			validationBehavior="aria"
			label={showLabel ? label : undefined}
			isRequired={isRequired}
			helperText={fieldConfigItem.description}
			onChange={field.handleChange}
			onBlur={field.handleBlur}
			{...fieldPropsWithoutShowLabel}
		/>
	)
}
