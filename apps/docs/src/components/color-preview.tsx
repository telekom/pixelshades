import { cn } from "@pixelshades/utils/styles"

export const ColorPreview = ({ className, name }: { className: string; name: string }) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-1.5">
			<div className={cn("size-12 rounded-md border border-border", className)} />
			<div className="font-medium text-foreground text-sm">{name}</div>
		</div>
	)
}
