import {
	Button,
	type Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	Input,
	Label,
	Popover,
	PopoverTrigger,
} from "@dv/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Popover> = {
	component: Popover,
	title: "Components/UI/Popover",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={`${inter.variable} font-sans relative w-full h-full dark`}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Card>

export const Example = () => {
	return (
		<PopoverTrigger>
			<Button variant="outline">Open popover</Button>
			<Popover className="w-80">
				<div className="grid gap-lg ">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Dimensions</h4>
						<p className="text-sm text-subtle-foreground">Set the dimensions for the layer.</p>
					</div>
					<div className="grid gap-md">
						<div className="grid grid-cols-3 items-center gap-lg">
							<Label htmlFor="width">Width</Label>
							<Input id="width" defaultValue="100%" className="col-span-2 h-8" />
						</div>
						<div className="grid grid-cols-3 items-center gap-lg">
							<Label htmlFor="maxWidth">Max. width</Label>
							<Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
						</div>
						<div className="grid grid-cols-3 items-center gap-lg">
							<Label htmlFor="height">Height</Label>
							<Input id="height" defaultValue="25px" className="col-span-2 h-8" />
						</div>
						<div className="grid grid-cols-3 items-center gap-lg">
							<Label htmlFor="maxHeight">Max. height</Label>
							<Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
						</div>
					</div>
				</div>
			</Popover>
		</PopoverTrigger>
	)
}
