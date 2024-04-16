import { textFieldVariants } from "@dv/styles/components/text-field"
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components"
import { TextField as AriaTextField, Input, Text } from "react-aria-components"
import { Label } from "../label"

const { root, input } = textFieldVariants()

export interface TextFieldProps extends AriaTextFieldProps {
	label?: string
	description?: string
	errorMessage?: string
}

const TextField = ({ label, description, errorMessage, ...props }: TextFieldProps) => (
	<AriaTextField className={root()} {...props}>
		<Label>{label}</Label>
		<Input className={input()} />
		{description && <Text slot="description">{description}</Text>}
		{errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
	</AriaTextField>
)

export { TextField }
