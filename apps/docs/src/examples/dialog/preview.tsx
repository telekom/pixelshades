import { Button, Dialog, Input, Label } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Dialog.Trigger>
			<Button variant="outline">Edit Profile</Button>
			<Dialog>
				<Dialog.Content className="sm:max-w-[425px]">
					{({ close }) => (
						<>
							<Dialog.Header>
								<Dialog.Title>Edit profile</Dialog.Title>
								<p className="text-sm text-subtle-foreground">
									Make changes to your profile here. Click save when you&apos;re done.
								</p>
							</Dialog.Header>
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
							<Dialog.Footer>
								<Button type="submit" onPress={close}>
									Save changes
								</Button>
							</Dialog.Footer>
						</>
					)}
				</Dialog.Content>
			</Dialog>
		</Dialog.Trigger>
	)
}
