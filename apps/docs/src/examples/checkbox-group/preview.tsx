import { Checkbox, CheckboxGroup } from "@dv/ui/components"

export default function Example() {
	return (
		<CheckboxGroup label="Notifications" defaultValue={["email"]}>
			<Checkbox value="push">Push</Checkbox>
			<Checkbox value="email">Email</Checkbox>
			<Checkbox value="text">Text</Checkbox>
		</CheckboxGroup>
	)
}
