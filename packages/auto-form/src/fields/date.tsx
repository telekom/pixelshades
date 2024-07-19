import { getLocalTimeZone } from "@internationalized/date"
import { DatePicker } from "@pixelshades/ui/components"
import type { AutoFormInputComponentProps } from "../types"

export function AutoFormDate({ label, isRequired, field, fieldConfigItem, fieldProps }: AutoFormInputComponentProps) {
	return (
		<DatePicker
			{...fieldProps}
			defaultValue={field.state.value}
			onChange={(v) => field.handleChange(v.toDate(getLocalTimeZone()))}
			onBlur={field.handleBlur}
			isRequired={isRequired}
			label={label}
			helperText={fieldConfigItem.description}
		/>
	)
}
