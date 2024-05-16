import { Switch } from "@pixelshades/ui/components"
import { FormControl, FormItem } from "../commons/hook-form"
import type { AutoFormInputComponentProps } from "../types"

export default function AutoFormSwitch({
	label,
	isRequired,
	field,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	return (
		<FormItem>
			<FormControl>
				<Switch
					label={label}
					helperText={fieldConfigItem.description}
					checked={field.value}
					onCheckedChange={field.onChange}
					{...fieldProps}
				/>
			</FormControl>
		</FormItem>
	)
}
