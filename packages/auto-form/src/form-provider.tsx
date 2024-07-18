import type { useForm } from "@tanstack/react-form"
import { createContext, useContext } from "react"

export const formContext = createContext<ReturnType<typeof useForm> | null>(null)

export const FormProvider = ({ children, form }: { children: React.ReactNode; form: ReturnType<typeof useForm> }) => {
	return <formContext.Provider value={form}>{children}</formContext.Provider>
}

export const useFormContext = () => {
	const form = useContext(formContext)

	if (!form) {
		throw new Error("useFormContext must be used within a FormProvider")
	}

	return form
}
