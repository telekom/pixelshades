// The following code is from dotui by mehdibha
// Source: https://github.com/mehdibha/dotui
// Used under the MIT License

import { TextField } from "@pixelshades/ui/components"
import type { AutoFormInputComponentProps } from "../types"

export function AutoFormInput({ field, label, isRequired, fieldConfigItem, fieldProps }: AutoFormInputComponentProps) {
	const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps
	const showLabel = _showLabel === undefined ? true : _showLabel
	const type = fieldProps.type || "text"

	return (
		<TextField
			type={type}
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
