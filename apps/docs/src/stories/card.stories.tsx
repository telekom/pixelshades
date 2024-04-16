import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Typography } from "@dv/ui/components"
import { cn } from "@dv/ui/utils"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Card> = {
	component: Card,
	title: "Components/UI/Card",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={cn(inter.variable, "dark relative h-full w-full font-sans")}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Card>

export const Example = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Some title</CardTitle>
			</CardHeader>
			<CardContent>
				<Typography>Some amazing content</Typography>
			</CardContent>
			<CardFooter>
				<div className="flex gap-lg">
					<Button>Activate</Button>
					<Button variant="outline">Show More</Button>
				</div>
			</CardFooter>
		</Card>
	)
}

export const Outline: Story = {
	args: {
		children: "Outline",
	},
}
