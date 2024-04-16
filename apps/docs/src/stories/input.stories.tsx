import { Input } from "@dv/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Input> = {
	component: Input,
	title: "Components/UI/Input",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={`${inter.variable} font-sans relative w-full h-full dark`}>
			<Story />
		</div>
	),
	args: {
		placeholder: "Placeholder",
	},
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
