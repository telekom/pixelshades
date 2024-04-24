import {
	Button,
	Checkbox,
	CheckboxGroup,
	DateField,
	DatePicker,
	Form,
	Radio,
	Switch,
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
			<DateField label="Label" description="Description" helperText="Helper Text" tooltip="Tooltip" isRequired />

			<TextField
				label="Label"
				description="Description"
				helperText="Helper Text"
				tooltip="Tooltip"
				isRequired
				type="email"
			/>

			<TimeField label="Label" description="Description" helperText="Helper Text" tooltip="Tooltip" isRequired />

			<DatePicker label="Label" description="Description" helperText="Helper Text" tooltip="Tooltip" isRequired />

			<Switch label="Switch" description="Description" tooltip="Tooltip" helperText="Helper text" />

			<Radio.Group label="Radio Group" description="Description" tooltip="Tooltip" helperText="Helper Text">
				<Radio value="push">Push</Radio>
				<Radio value="email">Email</Radio>
				<Radio value="text">Text</Radio>
			</Radio.Group>
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
