// The following code is from dotui by mehdibha
// Source: https://github.com/mehdibha/dotui
// Used under the MIT License

import { TextField } from "@pixelshades/ui/components"
import { FormControl, FormItem } from "../commons/hook-form"
import type { AutoFormInputComponentProps } from "../types"

export default function AutoFormInput({ label, isRequired, fieldConfigItem, fieldProps }: AutoFormInputComponentProps) {
	const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps
	const showLabel = _showLabel === undefined ? true : _showLabel
	const type = fieldProps.type || "text"

	return (
		<FormItem>
			<FormControl>
				<TextField
					type={type}
					validationBehavior="aria"
					label={showLabel ? label : undefined}
					isRequired={isRequired}
					helperText={fieldConfigItem.description}
					{...fieldPropsWithoutShowLabel}
				/>
			</FormControl>
		</FormItem>
	)
}
