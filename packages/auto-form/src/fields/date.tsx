import { getLocalTimeZone, parseAbsolute, parseDateTime } from "@internationalized/date"
import { DatePicker, type DateValue } from "@pixelshades/ui/components"
import { useMemo } from "react"
import type { AutoFormInputComponentProps } from "../types"

export function AutoFormDate({ label, isRequired, field, fieldConfigItem, fieldProps }: AutoFormInputComponentProps) {
	const { ...fieldPropsWithoutShowLabel } = fieldProps

	const parsedValue = useMemo(() => {
		if (field.state.value) {
			let dateVal: DateValue
			try {
				dateVal = parseAbsolute(field.state.value.toISOString(), getLocalTimeZone())
			} catch (err) {
				dateVal = parseDateTime(field.state.value.toISOString())
			}

			return dateVal
		}

		return undefined
	}, [field.state.value])

	return (
		<DatePicker
			defaultValue={parsedValue}
			onChange={(v) => field.handleChange(v.toDate(getLocalTimeZone()))}
			onBlur={field.handleBlur}
			isRequired={isRequired}
			granularity="day"
			label={label}
			helperText={fieldConfigItem.description}
			{...fieldPropsWithoutShowLabel}
		/>
	)
}
