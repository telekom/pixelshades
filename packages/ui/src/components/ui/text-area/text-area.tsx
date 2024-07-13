"use client"

import { TextField as AriaTextField, type TextFieldProps } from "react-aria-components"

import type { inputVariants } from "@pixelshades/styles/components/input"
import { forwardRef } from "@pixelshades/utils/jsx"
import type * as React from "react"
import type { VariantProps } from "tailwind-variants"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { type InputBasedCompBaseProps, InputRoot, TextAreaInput } from "../../core/input"

interface TextAreaProps
	extends TextFieldProps,
		InputBasedCompBaseProps,
		FormFieldProps,
		Omit<VariantProps<typeof inputVariants>, "size"> {
	placeholder?: string

	ref?: any
}
const TextArea = forwardRef(
	({
		className,
		placeholder,

		isRequired,

		// FormField Props
		label,
		helperText,
		tooltip,
		description,
		errorMessage,

		// Input Root Props
		after,
		before,
		isLoading,
		loaderPosition = "after",

		ref,

		...props
	}: TextAreaProps) => {
		return (
			<AriaTextField className={"flex flex-col gap-sm"} isRequired={isRequired} {...props}>
				<FormField
					label={label}
					helperText={helperText}
					description={description}
					tooltip={tooltip}
					isRequired={isRequired}
					errorMessage={errorMessage}
				>
					<InputRoot
						before={before}
						after={after}
						isLoading={isLoading}
						loaderPosition={loaderPosition}
						multiline
					>
						<TextAreaInput ref={ref} placeholder={placeholder} />
					</InputRoot>
				</FormField>
			</AriaTextField>
		)
	},
)

export type { TextAreaProps }
export { TextArea }
