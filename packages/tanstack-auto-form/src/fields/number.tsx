import { NumberField } from "@pixelshades/ui/components"
import type { AutoFormInputComponentProps } from "../types"

export default function AutoFormNumber({
	field,
	label,
	isRequired,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps
	const showLabel = _showLabel === undefined ? true : _showLabel

	console.log(fieldPropsWithoutShowLabel)

	return (
		<NumberField
			value={field.state.value}
			onChange={field.handleChange}
			onBlur={field.handleBlur}
			validationBehavior="aria"
			label={showLabel ? label : undefined}
			isRequired={isRequired}
			helperText={fieldConfigItem.description}
			{...fieldPropsWithoutShowLabel}
		/>
	)
}
