"use client"

import { cn } from "@pixelshades/cn"
import { Tabs } from "@pixelshades/ui/components"

import type * as React from "react"
import { Demos } from "../examples"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string
	extractClassname?: boolean
	extractedClassNames?: string
	align?: "center" | "start" | "end"
}

export function ComponentPreview({
	name,
	children,
	className,
	extractClassname,
	extractedClassNames,
	align = "center",
	...props
}: ComponentPreviewProps) {
	const component = Demos[name]

	if (!component) {
		return null
	}

	return (
		<div className={cn("group relative my-4 flex flex-col space-y-md", className)} {...props}>
			<Tabs>
				<Tabs.List aria-label="Dashbord Panels">
					<Tabs.Tab id="preview">Preview</Tabs.Tab>
					<Tabs.Tab id="code">Code</Tabs.Tab>
				</Tabs.List>
				<div className="flex w-full gap-md pt-layout-xs">
					<Tabs.Panel id="preview" className="w-full">
						<div className="flex min-h-[200px] w-full grow flex-row rounded-lg border bg-subtle/10 p-md">
							<div className="relative flex h-full min-h-[200px] w-full grow flex-row items-center justify-center p-12">
								<component.component />
							</div>
						</div>
					</Tabs.Panel>
					<Tabs.Panel id="code" className="w-full">
						<div className="not-prose w-full">{children}</div>
					</Tabs.Panel>
				</div>
			</Tabs>
		</div>
	)
}
