"use client"

import { Button, Select, Tabs, TextField, Typography } from "@pixelshades/ui/components"
import { IconBrightness, IconPalette } from "@pixelshades/ui/icons"
import { indigo } from "tailwindcss/colors"

const constrastLevels = [
	{
		name: "W.CAG 2.2 AAA",
		id: "wcag2.2AAA",
	},
	{
		name: "W.CAG 2.2 AA",
		id: "wcag2.2AA",
	},
	{
		name: "W.CAG 2.2 A",
		id: "wcag2.2A",
	},
]

export default function GeneratorPage() {
	return (
		<div className="flex">
			<div>Sidebar</div>
			<div className="w-full space-y-layout-md px-layout-sm py-layout-md">
				<div className="flex items-end gap-layout-sm">
					<TextField
						label="Color Base Value"
						tooltip="The base color value to generate the color scale from."
					/>
					<Select label="Contrast Level" tooltip="The contrast level to generate the color scale for.">
						{constrastLevels.map((level) => (
							<Select.Item key={level.id} id={level.id}>
								{level.name}
							</Select.Item>
						))}
					</Select>
					<div className="grow" />
					<Button className="min-w-[160px]" before={<IconPalette />} variant="outline">
						Generate
					</Button>
				</div>
				<Tabs>
					<Tabs.List className="pb-layout-sm" aria-label="Color Generator Tabs">
						<Tabs.Tab id="color-palette">Color Palette</Tabs.Tab>
						<Tabs.Tab id="lightmode-palette">Light Mode Palette</Tabs.Tab>
						<Tabs.Tab id="darkmode-palette">Dark Mode Palette</Tabs.Tab>
					</Tabs.List>
					<Tabs.Panel className="w-full" id="color-palette">
						<div className="flex h-[300px]">
							{Object.entries(indigo).map(([key, value]) => (
								<div
									key={key}
									style={{ backgroundColor: value }}
									className="relative flex h-full w-full justify-center border border-foreground border-l-0 py-layout-md last:rounded-r-md first:rounded-l-md first:border-l"
								>
									<Typography className="font-semibold">{key}</Typography>
									<div className="-translate-x-1/2 absolute top-[40%] left-1/2 flex size-5 transform items-center justify-center rounded-full border border-neutral-border bg-neutral-background">
										<IconBrightness className="size-3.5 text-foreground" />
									</div>
								</div>
							))}
						</div>
					</Tabs.Panel>
					<Tabs.Panel id="lightmode-palette">Light Mode Palette</Tabs.Panel>
					<Tabs.Panel id="darkmode-palette">Dark Mode Palette</Tabs.Panel>
				</Tabs>
			</div>
		</div>
	)
}
