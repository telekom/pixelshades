import { Button, DateField, Form, TextField, TimeField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Form className="min-w-[320px]">
			<TextField
				label="Email"
				name="email"
				tooltip="Email address"
				description="Your best email"
				isRequired
				type="email"
			/>

			<TimeField label="Start Date" isRequired />

			<DateField label="End Date" description="The end date of the event" isRequired />
			<div className="flex flex-row gap-md w-full">
				<Button className="w-full" type="submit">
					Submit
				</Button>

				<Button className="w-full" type="reset" variant="outline">
					Reset
				</Button>
			</div>
		</Form>
	)
}
