"use client"

import { Tab, TabPanel, Tabs, TabsList } from "@dv/ui/components"
import { cn } from "@dv/ui/utils"
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

	return (
		<div className={cn("group relative my-4 flex flex-col space-y-2", className)} {...props}>
			<Tabs>
				<TabsList aria-label="Dashbord Panels">
					<Tab id="preview">Preview</Tab>
					<Tab id="code">Code</Tab>
				</TabsList>
				<div className="flex w-full gap-md pt-layout-xs">
					<TabPanel id="preview" className="w-full">
						<div className="flex min-h-[200px] w-full grow flex-row rounded-lg border bg-subtle/10 p-md">
							<div className="flex h-full min-h-[200px] w-full grow flex-row items-center justify-center p-12">
								<component.component />
							</div>
						</div>
					</TabPanel>
					<TabPanel id="code" className="w-full">
						<div className="not-prose w-full">{children}</div>
					</TabPanel>
				</div>
			</Tabs>
		</div>
	)
}
