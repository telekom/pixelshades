import { formGroupVariants, formVariants } from "@pixelshades/styles/components/form"
import { createStyleContext, withStyle } from "@pixelshades/utils/styles"
import {
	FieldError as AriaFieldError,
	Form as AriaForm,
	type FormProps as AriaFormProps,
	Group as AriaGroup,
	Text as AriaText,
	Text,
	type TextProps,
} from "react-aria-components"

export type FormProps = AriaFormProps

const { withContext, withProvider } = createStyleContext(formVariants)

const FormRoot = withProvider(AriaForm, "root")

const FormFieldGroup = withStyle(AriaGroup, formGroupVariants)

const FormFieldError = withContext(AriaFieldError, "errorMessage")

const UnstyledFormDescription = (props: TextProps) => {
	return <AriaText slot="description" {...props} />
}

const FormDescription = withContext(UnstyledFormDescription, "description")

export const Form = Object.assign(FormRoot, {
	Description: FormDescription,
	FieldGroup: FormFieldGroup,
	FieldErrror: FormFieldError,
})

export { FormFieldGroup }
