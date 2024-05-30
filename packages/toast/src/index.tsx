"use client"

import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = (props: ToasterProps) => {
	return (
		<Sonner
			className="toaster group"
			toastOptions={{
				classNames: {
					toast: "group toast group-[.toaster]:bg-subtle group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
					description: "group-[.toast]:text-subtle-foreground",
					actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
					cancelButton: "group-[.toast]:bg-subtle group-[.toast]:text-subtle-foreground",
				},
			}}
			{...props}
		/>
	)
}

export { Toaster, toast }
