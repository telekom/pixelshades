import { Label, Radio, RadioGroup } from "@dv/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
	title: "Components/UI/RadioGroup",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={`${inter.variable} font-sans relative w-full h-full dark`}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Example: Story = {
	render: (args) => {
		return (
			<RadioGroup defaultValue="dog" {...args}>
				<Label>Favorite pet</Label>
				<Radio value="dog">Dog</Radio>
				<Radio value="cat">Cat</Radio>
				<Radio value="dragon">Dragon</Radio>
			</RadioGroup>
		)
	},
}
