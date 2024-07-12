import { Button, Dialog, TextField } from "@pixelshades/ui/components"

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
									<TextField
										label="Name"
										id="name"
										defaultValue="Pedro Duarte"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-lg">
									<TextField
										label="Username"
										id="username"
										defaultValue="@peduarte"
										className="col-span-3"
									/>
								</div>
							</div>
							<Dialog.Footer>
								<Dialog.CloseButton type="submit">Save changes</Dialog.CloseButton>
							</Dialog.Footer>
						</>
					)}
				</Dialog.Content>
			</Dialog>
		</Dialog.Trigger>
	)
}
