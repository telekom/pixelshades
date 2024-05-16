import { TextField } from "@pixelshades/ui/components"
import { FormControl, FormItem } from "~/components/ui/form"
import type { AutoFormInputComponentProps } from "../types"

export default function AutoFormInput({ label, isRequired, fieldConfigItem, fieldProps }: AutoFormInputComponentProps) {
	const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps
	const showLabel = _showLabel === undefined ? true : _showLabel
	const type = fieldProps.type || "text"

	return (
		<FormItem className="flex w-full flex-col justify-start">
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
