import { DatePicker } from "@pixelshades/ui/components"
import { FormControl, FormItem } from "../commons/hook-form"
import type { AutoFormInputComponentProps } from "../types"

export default function AutoFormDate({
	label,
	isRequired,
	field,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	return (
		<FormItem>
			<FormControl>
				<DatePicker
					{...fieldProps}
					value={field.value}
					onChange={field.onChange}
					isRequired={isRequired}
					label={label}
					helperText={fieldConfigItem.description}
				/>
			</FormControl>
		</FormItem>
	)
}
