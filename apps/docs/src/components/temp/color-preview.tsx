import { cn } from "@pixelshades/cn"

export const ColorPreview = ({
	className,
	name,
	style,
	...props
}: { className?: string; name?: string; style?: React.CSSProperties } & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-1.5">
			<div className={cn("size-12 rounded-md border border-border", className)} style={style} {...props} />
			{name && <div className="font-medium text-foreground text-sm">{name}</div>}
		</div>
	)
}
