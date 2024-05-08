import {
	Button,
	Checkbox,
	CheckboxGroup,
	DateField,
	DatePicker,
	Form,
	RadioGroup,
	Switch,
	TextField,
	TimeField,
} from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Form>
			<Checkbox
				label="Checkbox"
				tooltip="Tooltip"
				description="Some very long Description"
				helperText="Helper text"
				isRequired
			/>
			<CheckboxGroup
				label="Checkbox Group"
				description="Some very long Description"
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
				description="Some very long Description"
				helperText="Helper Text"
				tooltip="Tooltip"
				isRequired
				type="email"
			/>

			<TimeField label="Label" description="Description" helperText="Helper Text" tooltip="Tooltip" isRequired />

			<DatePicker label="Label" description="Description" helperText="Helper Text" tooltip="Tooltip" isRequired />

			<Switch label="Switch" description="Description" tooltip="Tooltip" helperText="Helper text" />

			<RadioGroup
				label="Radio Group"
				description="Description"
				tooltip="Tooltip"
				helperText="Helper Text"
				isRequired
			>
				<RadioGroup.Item value="push">Push</RadioGroup.Item>
				<RadioGroup.Item value="email">Email</RadioGroup.Item>
				<RadioGroup.Item value="text">Text</RadioGroup.Item>
			</RadioGroup>
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
