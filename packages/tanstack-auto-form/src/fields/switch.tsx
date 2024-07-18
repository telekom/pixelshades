import { Switch } from "@pixelshades/ui/components"
import type { AutoFormInputComponentProps } from "../types"

export function AutoFormSwitch({ label, isRequired, field, fieldConfigItem, fieldProps }: AutoFormInputComponentProps) {
	return (
		<Switch
			label={label}
			helperText={fieldConfigItem.description}
			checked={field.state.value}
			onCheckedChange={field.handleChange}
			onBlur={field.handleBlur}
			isRequired={isRequired}
			{...fieldProps}
		/>
	)
}
