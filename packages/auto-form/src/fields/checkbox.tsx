import { Checkbox } from "@pixelshades/ui/components"
import { FormControl, FormItem } from "../commons/hook-form"
import type { AutoFormInputComponentProps } from "../types"

export default function AutoFormCheckbox({
	label,
	isRequired,
	field,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	return (
		<FormItem>
			<FormControl>
				<Checkbox
					checked={field.value}
					label={label}
					isRequired={isRequired}
					helperText={fieldConfigItem.description}
					{...fieldProps}
				/>
			</FormControl>
		</FormItem>
	)
}
