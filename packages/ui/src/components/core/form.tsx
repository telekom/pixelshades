import type { ReactNode } from "react"
import type { ValidationResult } from "react-aria-components"
import { FormDescription, FormFieldError } from "../ui"
import { type FormComponentLabelProps, Label } from "./label"

export interface FormFieldProps extends FormComponentLabelProps {
	/** The description of the component. */
	helperText?: ReactNode
	/** The error message to display if the component is invalid. */
	errorMessage?: string | ((validation: ValidationResult) => string) | null
}

export const FormField = ({
	label,
	helperText,
	description,
	tooltip,
	errorMessage,
	children,
	isDisabled,
	isRequired,
}: FormFieldProps & {
	children?: React.ReactNode

	isDisabled?: boolean
	isRequired?: boolean
}) => {
	return (
		<>
			<Label description={description} aria-disabled={isDisabled} tooltip={tooltip} isRequired={isRequired}>
				{label}
			</Label>
			{children}
			{helperText && <FormDescription aria-disabled={isDisabled}>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</>
	)
}

FormField.displayName = "FieldField"
