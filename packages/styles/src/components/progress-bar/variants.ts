import { tv } from "tailwind-variants"

export const progressBarVariants = tv({
	slots: {
		progressRoot: "flex flex-col w-full",
		progressHeader: "flex justify-between px-1",
		progressBar: "overflow-hidden rounded-full",
		progressFill: "",
		progressDescription: "px-1",
	},
	variants: {
		variant: {
			default: {
				progressRoot: "text-primary",
				progressBar: "border border-primary/50",
				progressFill: "bg-primary",
			},
			info: {
				progressRoot: "text-subtle-foreground",
				progressBar: "border border-subtle-foreground/50 ",
				progressFill: "bg-subtle-foreground",
			},
			alert: {
				progressRoot: "text-destructive",
				progressBar: "border border-destructive/50",
				progressFill: "bg-destructive",
			},
			outline: {
				progressRoot: "text-foreground",
				progressBar: "border border-foreground/50",
				progressFill: "bg-foreground",
			},
		},
		size: {
			xs: {
				progressRoot: "text-xs gap-1",
				progressFill: "h-1",
			},
			sm: {
				progressRoot: "text-sm gap-md",
				progressFill: "h-2",
			},
			md: {
				progressRoot: "text-md gap-lg",
				progressFill: "h-4",
			},
			lg: {
				progressRoot: "text-lg gap-lg",
				progressFill: "h-6",
			},
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
})
