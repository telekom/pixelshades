import type { FieldComponent, FormApi, FormState, UseField, Validator } from "@tanstack/react-form"
import { type FunctionComponent, createContext, useContext } from "react"

// Workaround for https://github.com/TanStack/form/pull/868
// export type FormContextType = ReturnType<typeof useForm> | null
export type FormContextType = (FormApi<any, any> & ReactFormApi<any, any>) | null

export type NodeType = ReturnType<FunctionComponent>

interface ReactFormApi<TFormData, TFormValidator extends Validator<TFormData, unknown> | undefined = undefined> {
	/**
	 * A React component to render form fields. With this, you can render and manage individual form fields.
	 */
	Field: FieldComponent<TFormData, TFormValidator>
	/**
	 * A custom React hook that provides functionalities related to individual form fields. It gives you access to field values, errors, and allows you to set or update field values.
	 */
	useField: UseField<TFormData, TFormValidator>
	/**
	 * A `useStore` hook that connects to the internal store of the form. It can be used to access the form's current state or any other related state information. You can optionally pass in a selector function to cherry-pick specific parts of the state
	 */
	useStore: <TSelected = NoInfer<FormState<TFormData>>>(
		selector?: (state: NoInfer<FormState<TFormData>>) => TSelected,
	) => TSelected
	/**
	 * A `Subscribe` function that allows you to listen and react to changes in the form's state. It's especially useful when you need to execute side effects or render specific components in response to state updates.
	 */
	Subscribe: <TSelected = NoInfer<FormState<TFormData>>>(props: {
		/**
          TypeScript versions <=5.0.4 have a bug that prevents
          the type of the `TSelected` generic from being inferred
          from the return type of this method.
    
          In these versions, `TSelected` will fall back to the default
          type (or `unknown` if that's not defined).
    
          @see {@link https://github.com/TanStack/form/pull/606/files#r1506715714 | This discussion on GitHub for the details}
          @see {@link https://github.com/microsoft/TypeScript/issues/52786 | The bug report in `microsoft/TypeScript`}
          */
		selector?: (state: NoInfer<FormState<TFormData>>) => TSelected
		children: ((state: NoInfer<TSelected>) => NodeType) | NodeType
	}) => NodeType
}

export const formContext = createContext<FormContextType | null>(null)

export const FormProvider = ({ children, form }: { children: React.ReactNode; form: FormContextType }) => {
	return <formContext.Provider value={form}>{children}</formContext.Provider>
}

export const useFormContext = () => {
	const form = useContext(formContext)

	if (!form) {
		throw new Error("useFormContext must be used within a FormProvider")
	}

	return form
}
