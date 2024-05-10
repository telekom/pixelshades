import { tv } from "tailwind-variants"

export const alertVariants = tv({
	slots: {
		root: "flex text-sm leading-6 bg-background text-foreground",
		icon: "size-6",
	},
	variants: {
		variant: {
			inline: { root: "rounded-lg px-md py-lg sm:items-center", icon: "pl-md" },
			expanded: { root: "gap-sm rounded-r-lg border-l-2 p-xl pl-layout-md" },
		},
		color: {
			gray: { root: "border-border text-foreground", icon: "text-subtle-foreground" },
			primary: { root: "border-primary text-foreground", icon: "text-primary" },
			info: { root: "border-info border-info/10 text-foreground", icon: "text-info" },
			success: { root: "border-success bg-success/10 text-foreground", icon: "text-success" },
			error: { root: "border-destructive bg-destructive/10 text-foreground", icon: "text-destructive" },
			warning: { root: "border-warning bg-warning/10 text-foreground", icon: "text-warning" },
		},
	},
	defaultVariants: {
		variant: "inline",
		color: "gray",
	},
})
