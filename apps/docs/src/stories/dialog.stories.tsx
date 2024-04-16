import {
	Button,
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
} from "@dv/ui/components"
import { cn } from "@dv/ui/utils"

import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Dialog> = {
	component: Dialog,
	title: "Components/UI/Dialog",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={cn(inter.variable, "dark relative h-full w-full font-sans")}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Example = () => {
	return (
		<DialogTrigger>
			<Button variant="outline">Edit Profile</Button>
			<Dialog>
				<DialogContent className="sm:max-w-[425px]">
					{({ close }) => (
						<>
							<DialogHeader>
								<DialogTitle>Edit profile</DialogTitle>
								<p className="text-sm text-subtle-foreground">
									Make changes to your profile here. Click save when you&apos;re done.
								</p>
							</DialogHeader>
							<div className="grid gap-lg py-4">
								<div className="grid grid-cols-4 items-center gap-lg">
									<Label htmlFor="name" className="text-right">
										Name
									</Label>
									<Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-lg">
									<Label htmlFor="username" className="text-right">
										Username
									</Label>
									<Input id="username" defaultValue="@peduarte" className="col-span-3" />
								</div>
							</div>
							<DialogFooter>
								<Button type="submit" onPress={close}>
									Save changes
								</Button>
							</DialogFooter>
						</>
					)}
				</DialogContent>
			</Dialog>
		</DialogTrigger>
	)
}
