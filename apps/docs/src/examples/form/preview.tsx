import {
	Button,
	Checkbox,
	CheckboxGroup,
	DateField,
	DatePicker,
	Form,
	TextField,
	TimeField,
} from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Form className="min-w-[320px]">
			<Checkbox
				label="Checkbox"
				tooltip="Tooltip"
				description="Description"
				helperText="Helper text"
				isRequired
			/>
			<CheckboxGroup
				label="Checkbox Group"
				description="Description"
				tooltip="Tooltip"
				helperText="Helper Text"
				isRequired
			>
				<Checkbox value="push" label="Push" />
				<Checkbox value="email" label="Email" />
				<Checkbox value="text" label="Text" />
			</CheckboxGroup>
			<DateField label="DateField" description="Description" tooltip="Tooltip" isRequired />

			<TextField
				label="Email"
				name="email"
				tooltip="Email address"
				description="Your best email"
				isRequired
				type="email"
			/>

			<TimeField label="Start Date" isRequired />

			<DatePicker label="Custom Date Picker" description="The end date of the event" isRequired />
			<div className="flex w-full flex-row gap-md">
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
