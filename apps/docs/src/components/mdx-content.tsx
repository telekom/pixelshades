"use client"

import { Heading, Tabs } from "@pixelshades/ui/components"
import { cn } from "@pixelshades/cn"
import * as runtime from "react/jsx-runtime"
import { ComponentPreview } from "./component-preview"
import { ColorPreview } from "./temp/color-preview"

interface MdxProps {
	code: string
	components?: Record<string, React.ComponentType>
}

const defaultComponents = {
	ComponentPreview,
	ColorPreview,
	Tabs,
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)}
			{...props}
		/>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props} />
	),
	th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
		<th
			className={cn(
				"border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
		<td
			className={cn(
				"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	pre: ({
		className,
		__rawString__,
		__withMeta__,
		__src__,
		...props
	}: React.HTMLAttributes<HTMLPreElement> & {
		__rawString__?: string
		__withMeta__?: boolean
		__src__?: string
	}) => {
		return (
			<div className="relative h-full w-full">
				<pre
					className={cn(
						"!bg-subtle/10 dark:!bg-subtle/10 max-h-[650px] overflow-x-auto rounded-lg border py-4",
						className,
					)}
					{...props}
				/>
			</div>
		)
	},
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Heading level={1} className={cn("mt-2 scroll-m-20", className)} {...props} />
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Heading
			level={2}
			className={cn("mt-12 scroll-m-20 border-b pb-2 tracking-tight first:mt-0", className)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Heading level={3} className={cn("mt-8 scroll-m-20", className)} {...props} />
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Heading level={4} className={cn("mt-8 scroll-m-20", className)} {...props} />
	),
	h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Heading level={5} className={cn("mt-8 scroll-m-20", className)} {...props} />
	),
	h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Heading
			level={6}
			className={cn("mt-8 scroll-m-20 font-semibold text-base tracking-tight", className)}
			{...props}
		/>
	),
	a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
		<a className={cn("font-medium underline underline-offset-4", className)} {...props} />
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<li className={cn("mt-2", className)} {...props} />
	),
	blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
	),
	img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// biome-ignore lint/a11y/useAltText: <explanation>
		<img className={cn("rounded-md", className)} alt={alt} {...props} />
	),
	hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => <hr className="my-4 md:my-8" {...props} />,
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-y-auto">
			<table className={cn("w-full", className)} {...props} />
		</div>
	),
}

const useMDXComponent = (code: string) => {
	const fn = new Function(code)
	return fn({ ...runtime }).default
}

export function MDXContent({ code, components }: MdxProps) {
	const Component = useMDXComponent(code)
	return <Component components={{ ...defaultComponents, ...components }} />
}
