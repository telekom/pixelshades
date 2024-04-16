import { Typography } from "@dv/ui/components"
import { cn } from "@dv/ui/utils"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Typography> = {
	component: Typography,
	title: "Components/UI/Typography",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={cn(inter.variable, "dark relative h-full w-full font-sans")}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
	args: {
		children: "Lorem Ipsum",
	},
}

export const Sizes = () => {
	return (
		<div>
			<Typography size="xs">Ag</Typography>
			<Typography size="sm">Ag</Typography>
			<Typography size="md">Ag</Typography>
			<Typography size="lg">Ag</Typography>
			<Typography size="xl">Ag</Typography>
			<Typography size="2xl">Ag</Typography>
			<Typography size="3xl">Ag</Typography>
			<Typography size="4xl">Ag</Typography>
			<Typography size="5xl">Ag</Typography>
			<Typography size="6xl">Ag</Typography>
			<Typography size="7xl">Ag</Typography>
		</div>
	)
}
