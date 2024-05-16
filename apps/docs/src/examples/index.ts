/* eslint-disable @typescript-eslint/ban-ts-comment */
  /* -------------------------------------------------------------------------- */
  /*                    GENERATED FILE, DO NOT EDIT MANUALLY!                   */
  /* -------------------------------------------------------------------------- */
  import { lazy, type LazyExoticComponent } from "react";
  
  type Demo = {
	component: LazyExoticComponent<() => JSX.Element>;
	code: string;
  };
  
  export const Demos: Record<string, Demo> = {
    "avatar/initials": {
	  component: lazy(() => import("~/examples/avatar/initials.tsx")),
	  code: `import { Avatar } from "@pixelshades/ui/components"

export function Example() {
	return <Avatar initials="ma" alt="@makisuo__" />
}
`,
  },
  "avatar/preview": {
	  component: lazy(() => import("~/examples/avatar/preview.tsx")),
	  code: `import { Avatar } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Avatar src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg" alt="@makisuo__" />
	)
}
`,
  },
  "badge/alert": {
	  component: lazy(() => import("~/examples/badge/alert.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { ArrowRightIcon, SmileIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Badge variant="alert" before={<SmileIcon />} after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "badge/default": {
	  component: lazy(() => import("~/examples/badge/default.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { ArrowRightIcon, SmileIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Badge variant="default" before={<SmileIcon />} after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "badge/info": {
	  component: lazy(() => import("~/examples/badge/info.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { ArrowRightIcon, SmileIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Badge variant="info" before={<SmileIcon />} after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "badge/outline": {
	  component: lazy(() => import("~/examples/badge/outline.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { ArrowRightIcon, SmileIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Badge variant="outline" before={<SmileIcon />} after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "badge/preview": {
	  component: lazy(() => import("~/examples/badge/preview.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { ArrowRightIcon, SmileIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Badge before={<SmileIcon />} after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "badge/with-after": {
	  component: lazy(() => import("~/examples/badge/with-after.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { ArrowRightIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Badge variant="default" after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "badge/with-before": {
	  component: lazy(() => import("~/examples/badge/with-before.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { Smile } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Badge variant="default" before={<Smile />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "breadcrumbs/custom": {
	  component: lazy(() => import("~/examples/breadcrumbs/custom.tsx")),
	  code: `import { Breadcrumbs } from "@pixelshades/ui/components"
import { MoveRightIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Breadcrumbs separator={<MoveRightIcon className="size-4 text-subtle" />}>
			<Breadcrumbs.Item>Products</Breadcrumbs.Item>
			<Breadcrumbs.Item>Product</Breadcrumbs.Item>
			<Breadcrumbs.Item last>Product A</Breadcrumbs.Item>
		</Breadcrumbs>
	)
}
`,
  },
  "breadcrumbs/preview": {
	  component: lazy(() => import("~/examples/breadcrumbs/preview.tsx")),
	  code: `import { Breadcrumbs } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Breadcrumbs>
			<Breadcrumbs.Item>Products</Breadcrumbs.Item>
			<Breadcrumbs.Item>Product</Breadcrumbs.Item>
			<Breadcrumbs.Item last>Product A</Breadcrumbs.Item>
		</Breadcrumbs>
	)
}
`,
  },
  "button/ghost": {
	  component: lazy(() => import("~/examples/button/ghost.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"

export function Example() {
	return <Button variant="ghost">Button</Button>
}
`,
  },
  "button/link": {
	  component: lazy(() => import("~/examples/button/link.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"

export function Example() {
	return <Button variant="link">Button</Button>
}
`,
  },
  "button/loading": {
	  component: lazy(() => import("~/examples/button/loading.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"
import { SnailIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Button before={<SnailIcon />} isLoading>
			Button
		</Button>
	)
}
`,
  },
  "button/outline": {
	  component: lazy(() => import("~/examples/button/outline.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"

export function Example() {
	return <Button variant="outline">Button</Button>
}
`,
  },
  "button/preview": {
	  component: lazy(() => import("~/examples/button/preview.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"
import { SnailIcon } from "@pixelshades/ui/icons"

export function Example() {
	return <Button before={<SnailIcon />}>Button</Button>
}
`,
  },
  "button/sizes": {
	  component: lazy(() => import("~/examples/button/sizes.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-row flex-wrap gap-md">
			<Button size="xs">XS Button</Button>
			<Button size="sm">SM Button</Button>
			<Button size="md">MD Button</Button>
			<Button size="lg">LG Button</Button>
		</div>
	)
}
`,
  },
  "button/solid": {
	  component: lazy(() => import("~/examples/button/solid.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"

export function Example() {
	return <Button variant="solid">Button</Button>
}
`,
  },
  "button/subtle": {
	  component: lazy(() => import("~/examples/button/subtle.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"

export function Example() {
	return <Button variant="subtle">Button</Button>
}
`,
  },
  "button-group/ghost": {
	  component: lazy(() => import("~/examples/button-group/ghost.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ButtonGroup variant="ghost">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</ButtonGroup>
	)
}
`,
  },
  "button-group/link": {
	  component: lazy(() => import("~/examples/button-group/link.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ButtonGroup variant="link">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</ButtonGroup>
	)
}
`,
  },
  "button-group/orientation": {
	  component: lazy(() => import("~/examples/button-group/orientation.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-row gap-layout-sm">
			<ButtonGroup orientation="vertical">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>

			<ButtonGroup orientation="vertical" variant="outline">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>

			<ButtonGroup orientation="vertical" variant="ghost">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>

			<ButtonGroup orientation="vertical" variant="link">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
	)
}
`,
  },
  "button-group/outline": {
	  component: lazy(() => import("~/examples/button-group/outline.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ButtonGroup variant="outline">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</ButtonGroup>
	)
}
`,
  },
  "button-group/preview": {
	  component: lazy(() => import("~/examples/button-group/preview.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ButtonGroup variant="outline">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</ButtonGroup>
	)
}
`,
  },
  "button-group/solid": {
	  component: lazy(() => import("~/examples/button-group/solid.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ButtonGroup variant="solid">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</ButtonGroup>
	)
}
`,
  },
  "button-group/variants": {
	  component: lazy(() => import("~/examples/button-group/variants.tsx")),
	  code: `import { Button, ButtonGroup, Heading } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-4">
			<Heading level={3}>Solid Button Group</Heading>
			<ButtonGroup variant="solid">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<Heading level={3}>Ghost Button Group</Heading>
			<ButtonGroup variant="ghost">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<Heading level={3}>Outline Button Group</Heading>
			<ButtonGroup variant="outline">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
	)
}
`,
  },
  "calendar/custom-duration": {
	  component: lazy(() => import("~/examples/calendar/custom-duration.tsx")),
	  code: `import { Calendar } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Calendar
			visibleDuration={{
				months: 3,
			}}
		/>
	)
}
`,
  },
  "calendar/disabled": {
	  component: lazy(() => import("~/examples/calendar/disabled.tsx")),
	  code: `import { Calendar } from "@pixelshades/ui/components"

export function Example() {
	return <Calendar isDisabled />
}
`,
  },
  "calendar/min-dates": {
	  component: lazy(() => import("~/examples/calendar/min-dates.tsx")),
	  code: `import { getLocalTimeZone, today } from "@internationalized/date"
import { Calendar } from "@pixelshades/ui/components"

export function Example() {
	const now = today(getLocalTimeZone())

	return <Calendar minValue={now} maxValue={now.add({ days: 15 })} />
}
`,
  },
  "calendar/preview": {
	  component: lazy(() => import("~/examples/calendar/preview.tsx")),
	  code: `import { Calendar } from "@pixelshades/ui/components"

export function Example() {
	return <Calendar />
}
`,
  },
  "calendar/unavailable-dates": {
	  component: lazy(() => import("~/examples/calendar/unavailable-dates.tsx")),
	  code: `"use client"

import { isWeekend } from "@internationalized/date"
import { Calendar } from "@pixelshades/ui/components"
import { useLocale } from "@pixelshades/ui/hooks"

export function Example() {
	const { locale } = useLocale()

	return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}
`,
  },
  "card/preview": {
	  component: lazy(() => import("~/examples/card/preview.tsx")),
	  code: `import { Button, Card, Input, Label, Select } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Card className="w-[350px]">
			<Card.Header>
				<Card.Title>Create project</Card.Title>
				<Card.Description>Deploy your new project in one-click.</Card.Description>
			</Card.Header>
			<Card.Content>
				<form>
					<div className="grid w-full items-center gap-lg">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Name of your project" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Select label="Framework">
								<Select.Item id="next">Next.js</Select.Item>
								<Select.Item id="sveltekit">SvelteKit</Select.Item>
								<Select.Item id="astro">Astro</Select.Item>
								<Select.Item id="nuxt">Nuxt.js</Select.Item>
							</Select>
						</div>
					</div>
				</form>
			</Card.Content>
			<Card.Footer className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
			</Card.Footer>
		</Card>
	)
}
`,
  },
  "checkbox/preview": {
	  component: lazy(() => import("~/examples/checkbox/preview.tsx")),
	  code: `import { Button, Checkbox, Form } from "@pixelshades/ui/components"

export function Example() {
	return <Checkbox value="push" label="Label" description="Description" helperText="Helper Text" tooltip="Tooltip" />
}
`,
  },
  "checkbox-group/preview": {
	  component: lazy(() => import("~/examples/checkbox-group/preview.tsx")),
	  code: `import { Checkbox, CheckboxGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<CheckboxGroup label="Notifications" defaultValue={["email"]}>
			<Checkbox value="push">Push</Checkbox>
			<Checkbox value="email">Email</Checkbox>
			<Checkbox value="text">Text</Checkbox>
		</CheckboxGroup>
	)
}
`,
  },
  "combobox/preview": {
	  component: lazy(() => import("~/examples/combobox/preview.tsx")),
	  code: `import { ComboBox } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ComboBox label="Project">
			<ComboBox.Item>Health Dashboard</ComboBox.Item>
			<ComboBox.Item>To-Do App</ComboBox.Item>
			<ComboBox.Item>UI Kit</ComboBox.Item>
			<ComboBox.Item>Portfolio Site</ComboBox.Item>
		</ComboBox>
	)
}
`,
  },
  "command/controlled": {
	  component: lazy(() => import("~/examples/command/controlled.tsx")),
	  code: `import { Button, Command } from "@pixelshades/ui/components"
import { Apple, CommandIcon, GlassWater } from "@pixelshades/ui/icons"
import { useState } from "react"

export function Example() {
	const [inputValue, setInputValue] = useState("")
	const [open, setOpen] = useState(false)

	const fruits = [
		{ name: "Apple", description: "Red apple" },
		{ name: "Apple", description: "Green apple" },
		{ name: "Banana" },
	]

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	]

	return (
		<div>
			<Button onPress={() => setOpen(true)}>
				Open <CommandIcon className="size-4" /> B
			</Button>
			<Command
				shortcut={["Meta", "KeyB"]}
				searchValue={inputValue}
				onSearchChange={setInputValue}
				searchField={<Command.Search />}
				onOpenChange={setOpen}
				open={open}
				disableIntegratedSearch
			>
				<Command.Group heading="Fruits">
					{fruits.map((fruit, index) => (
						<Command.Item key={fruit.name + index} before={<Apple />} className={"items-center"}>
							<div className="flex flex-col items-center gap-2">
								<Command.ItemTitle>{fruit.name}</Command.ItemTitle>
								{fruit.description && (
									<Command.ItemDescription>{fruit.description}</Command.ItemDescription>
								)}
							</div>
						</Command.Item>
					))}
				</Command.Group>
				<Command.Group heading="Drinks">
					{drinks.map((drink) => (
						<Command.Item key={drink.name} before={<GlassWater />} className={"items-center"}>
							<div className="flex flex-col gap-2">
								<Command.ItemTitle>{drink.name}</Command.ItemTitle>
								{drink.description && (
									<Command.ItemDescription>{drink.description}</Command.ItemDescription>
								)}
							</div>
						</Command.Item>
					))}
				</Command.Group>
			</Command>
		</div>
	)
}
`,
  },
  "command/preview": {
	  component: lazy(() => import("~/examples/command/preview.tsx")),
	  code: `import { Command } from "@pixelshades/ui/components"
import { Apple, GlassWater } from "@pixelshades/ui/icons"

export function Example() {
	const fruits = [
		{ name: "Apple", description: "Red apple" },
		{ name: "Apple", description: "Green apple" },
		{ name: "Banana" },
	]

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	]
	return (
		<Command shortcut={["Meta", "KeyX"]} searchField={<Command.Search />}>
			<Command.Group heading="Fruits">
				{fruits.map((fruit, index) => (
					<Command.Item
						key={fruit.name + index}
						before={<Apple />}
						searchValues={[fruit.name, fruit.description || ""]}
						className={"items-center"}
					>
						<div className="flex flex-col items-center gap-2">
							<Command.ItemTitle>{fruit.name}</Command.ItemTitle>
							{fruit.description && (
								<Command.ItemDescription>{fruit.description}</Command.ItemDescription>
							)}
						</div>
					</Command.Item>
				))}
			</Command.Group>
			<Command.Group heading="Drinks">
				{drinks.map((drink) => (
					<Command.Item
						key={drink.name}
						before={<GlassWater />}
						searchValues={[drink.name, drink.description || ""]}
					>
						<div className="flex flex-col gap-2">
							<Command.ItemTitle>{drink.name}</Command.ItemTitle>
							{drink.description && (
								<Command.ItemDescription>{drink.description}</Command.ItemDescription>
							)}
						</div>
					</Command.Item>
				))}
			</Command.Group>
		</Command>
	)
}
`,
  },
  "command/uncontrolled": {
	  component: lazy(() => import("~/examples/command/uncontrolled.tsx")),
	  code: `import { Command } from "@pixelshades/ui/components"
import { Apple, GlassWater } from "@pixelshades/ui/icons"

export function Example() {
	const fruits = [
		{ name: "Apple", description: "Red apple" },
		{ name: "Apple", description: "Green apple" },
		{ name: "Banana" },
	]

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	]
	return (
		<Command shortcut={["Meta", "KeyJ"]} searchField={<Command.Search />}>
			<Command.Group heading="Fruits">
				{fruits.map((fruit) => (
					<Command.Item
						key={fruit.name}
						before={<Apple />}
						className={"items-center"}
						searchValues={[fruit.name, fruit.description || ""]}
					>
						<div className="flex flex-col items-center gap-2">
							<Command.ItemTitle>{fruit.name}</Command.ItemTitle>
							{fruit.description && (
								<Command.ItemDescription>{fruit.description}</Command.ItemDescription>
							)}
						</div>
					</Command.Item>
				))}
			</Command.Group>
			<Command.Group heading="Drinks">
				{drinks.map((drink) => (
					<Command.Item
						key={drink.name}
						before={<GlassWater />}
						className={"items-center"}
						searchValues={[drink.name, drink.description || ""]}
					>
						<div className="flex flex-col gap-2">
							<Command.ItemTitle>{drink.name}</Command.ItemTitle>
							{drink.description && (
								<Command.ItemDescription>{drink.description}</Command.ItemDescription>
							)}
						</div>
					</Command.Item>
				))}
			</Command.Group>
		</Command>
	)
}
`,
  },
  "data-list/preview": {
	  component: lazy(() => import("~/examples/data-list/preview.tsx")),
	  code: `import { DataList, Link } from "@pixelshades/ui/components"
import { GithubIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<DataList>
			<DataList.Item>
				<DataList.Label>Import</DataList.Label>
				<DataList.Value>
					<code>
						import {"{ "}
						Button
						{" }"} from "@pixelshades/ui/components"
					</code>
				</DataList.Value>
			</DataList.Item>
			<DataList.Item>
				<DataList.Label>Source</DataList.Label>
				<DataList.Value>
					<GithubIcon className="size-3" />
					<Link
						className="text-foreground"
						href={"https://github.com/telekom/pixelshades/tree/main/packages/ui/src/components/ui/button"}
					>
						View Source Code
					</Link>
				</DataList.Value>
			</DataList.Item>
			<DataList.Item>
				<DataList.Label>Owner</DataList.Label>
				<DataList.Value>Michael Jackson</DataList.Value>
			</DataList.Item>
		</DataList>
	)
}
`,
  },
  "date-field/granularity": {
	  component: lazy(() => import("~/examples/date-field/granularity.tsx")),
	  code: `import { DateField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DateField label="Day" granularity="day" />
			<DateField label="Hour" granularity="hour" />
			<DateField label="Minute" granularity="minute" />
			<DateField label="Second" granularity="second" />
		</div>
	)
}
`,
  },
  "date-field/preview": {
	  component: lazy(() => import("~/examples/date-field/preview.tsx")),
	  code: `import { DateField } from "@pixelshades/ui/components"

export function Example() {
	return <DateField label="Start Date" />
}
`,
  },
  "date-picker/granularity": {
	  component: lazy(() => import("~/examples/date-picker/granularity.tsx")),
	  code: `import { DatePicker } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DatePicker label="Day" granularity="day" />
			<DatePicker label="Hour" granularity="hour" />
			<DatePicker label="Minute" granularity="minute" />
			<DatePicker label="Second" granularity="second" />
		</div>
	)
}
`,
  },
  "date-picker/preview": {
	  component: lazy(() => import("~/examples/date-picker/preview.tsx")),
	  code: `import { DatePicker } from "@pixelshades/ui/components"

export function Example() {
	return <DatePicker label="Start Date" />
}
`,
  },
  "date-range-picker/granularity": {
	  component: lazy(() => import("~/examples/date-range-picker/granularity.tsx")),
	  code: `import { DateRangePicker } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DateRangePicker label="Day" granularity="day" />
			<DateRangePicker label="Hour" granularity="hour" />
			<DateRangePicker label="Minute" granularity="minute" />
			<DateRangePicker label="Second" granularity="second" />
		</div>
	)
}
`,
  },
  "date-range-picker/preview": {
	  component: lazy(() => import("~/examples/date-range-picker/preview.tsx")),
	  code: `import { DateRangePicker } from "@pixelshades/ui/components"

export function Example() {
	return <DateRangePicker label="Start Date" />
}
`,
  },
  "dialog/hideCloseButton": {
	  component: lazy(() => import("~/examples/dialog/hideCloseButton.tsx")),
	  code: `import { Button, Dialog, Input, Label } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Dialog.Trigger>
			<Button variant="outline">Edit Profile</Button>
			<Dialog>
				<Dialog.Content className="sm:max-w-[425px]" hideCloseButton={true}>
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
`,
  },
  "dialog/preview": {
	  component: lazy(() => import("~/examples/dialog/preview.tsx")),
	  code: `import { Button, Dialog, Input, Label } from "@pixelshades/ui/components"

export function Example() {
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
								<Dialog.CloseButton type="submit">Save changes</Dialog.CloseButton>
							</Dialog.Footer>
						</>
					)}
				</Dialog.Content>
			</Dialog>
		</Dialog.Trigger>
	)
}
`,
  },
  "drawer/directions": {
	  component: lazy(() => import("~/examples/drawer/directions.tsx")),
	  code: `import { Button, Drawer, type DrawerPlacement, Select } from "@pixelshades/ui/components"
import React from "react"

export const PLACEMENTS = ["bottom", "left", "right", "top"] satisfies DrawerPlacement[]

export function Example() {
	const options = PLACEMENTS.map((d) => ({ name: d }))
	const [placement, setPlacement] = React.useState<DrawerPlacement>("right")

	return (
		<div className="flex flex-col gap-layout-sm">
			<div>
				<Select
					label="Direction"
					items={options}
					selectedKey={placement}
					onSelectionChange={(selected) => setPlacement(selected as DrawerPlacement)}
				>
					{(item) => <Select.Item id={item.name}>{item.name}</Select.Item>}
				</Select>
			</div>
			<Drawer.Trigger>
				<Button variant="outline">open drawer {placement}</Button>
				<Drawer placement={placement}>
					<Drawer.Content className="h-full">
						{({ close }) => (
							<>
								<Drawer.Header>
									<Drawer.Title>Drawer Title</Drawer.Title>
								</Drawer.Header>
								<div className={placement === "bottom" ? "h-[200px]" : "h-full"}>Drawer Content</div>
								<Drawer.Footer>
									<Button onPress={close}>Close Drawer</Button>
								</Drawer.Footer>
							</>
						)}
					</Drawer.Content>
				</Drawer>
			</Drawer.Trigger>
		</div>
	)
}
`,
  },
  "drawer/hideCloseButton": {
	  component: lazy(() => import("~/examples/drawer/hideCloseButton.tsx")),
	  code: `import { Button, Drawer } from "@pixelshades/ui/components"
import { SquareX } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Drawer.Trigger>
			<Button variant="outline">open default drawer</Button>
			<Drawer>
				<Drawer.Content hideCloseButton={true}>
					<>
						<Drawer.Header className={"flex-row items-center justify-between space-y-0"}>
							<Drawer.Title>Drawer Title</Drawer.Title>
						</Drawer.Header>
						<div>Drawer Content</div>
					</>
				</Drawer.Content>
			</Drawer>
		</Drawer.Trigger>
	)
}
`,
  },
  "drawer/preview": {
	  component: lazy(() => import("~/examples/drawer/preview.tsx")),
	  code: `import { Button, Drawer } from "@pixelshades/ui/components"
import { SquareX } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Drawer.Trigger>
			<Button variant="outline">open default drawer</Button>
			<Drawer>
				<Drawer.Content>
					<>
						<Drawer.Header className={"flex-row items-center justify-between space-y-0"}>
							<Drawer.Title>Drawer Title</Drawer.Title>
						</Drawer.Header>
						<div>Drawer Content</div>
					</>
				</Drawer.Content>
			</Drawer>
		</Drawer.Trigger>
	)
}
`,
  },
  "form/preview": {
	  component: lazy(() => import("~/examples/form/preview.tsx")),
	  code: `import {
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

export function Example() {
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
`,
  },
  "heading/flat-heading-levels": {
	  component: lazy(() => import("~/examples/heading/flat-heading-levels.tsx")),
	  code: `import { Heading, HeadingLevel, Typography } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div>
			<Heading>h1</Heading>
			<Heading level={2}>h2</Heading>
			<Heading level={3}>h3</Heading>
			<Heading level={4}>h4</Heading>
			<Heading level={5}>h5</Heading>
			<Heading level={6}>h6</Heading>
		</div>
	)
}
`,
  },
  "heading/nested-heading-level": {
	  component: lazy(() => import("~/examples/heading/nested-heading-level.tsx")),
	  code: `import { Heading, HeadingLevel, Typography } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div>
			<HeadingLevel level={2}>
				<Heading>h2</Heading>
			</HeadingLevel>
		</div>
	)
}
`,
  },
  "heading/preview": {
	  component: lazy(() => import("~/examples/heading/preview.tsx")),
	  code: `import { Heading, HeadingLevel, Typography } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div>
			<Heading>h1</Heading>
			<HeadingLevel>
				<Heading>h2</Heading>
				<HeadingLevel>
					<Heading>h3</Heading>
					<HeadingLevel>
						<Heading>h4</Heading>
						<HeadingLevel>
							<Heading>h5</Heading>
							<HeadingLevel>
								<Heading>h6</Heading>
							</HeadingLevel>
						</HeadingLevel>
					</HeadingLevel>
				</HeadingLevel>
			</HeadingLevel>
		</div>
	)
}
`,
  },
  "highlight/preview": {
	  component: lazy(() => import("~/examples/highlight/preview.tsx")),
	  code: `import { Highlight, Typography } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Typography>
			<Highlight highlight={["ell", "rld"]}>Hello World</Highlight>
		</Typography>
	)
}
`,
  },
  "highlight/search": {
	  component: lazy(() => import("~/examples/highlight/search.tsx")),
	  code: `import { Highlight, Input, Label, Typography } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [inputValue, setInputValue] = useState("")

	const highlightedChars = inputValue.split("")
	const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

	return (
		<div className="flex flex-col gap-lg">
			<div>
				<Label>Search</Label>
				<Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			</div>
			<div className="flex flex-col gap-sm">
				{fruits.map((fruit) => (
					<Typography key={fruit}>
						<Highlight highlight={highlightedChars}>{fruit}</Highlight>
					</Typography>
				))}
			</div>
		</div>
	)
}
`,
  },
  "kbd/preview": {
	  component: lazy(() => import("~/examples/kbd/preview.tsx")),
	  code: `import { Kbd } from "@pixelshades/ui/components"

export function Example() {
	return <Kbd keys={["option", "command"]}>K</Kbd>
}
`,
  },
  "link/active": {
	  component: lazy(() => import("~/examples/link/active.tsx")),
	  code: `import { Link } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex gap-md">
			<Link variant="active">Active</Link>
			<Link>Normal Link</Link>
		</div>
	)
}
`,
  },
  "link/preview": {
	  component: lazy(() => import("~/examples/link/preview.tsx")),
	  code: `import { Link } from "@pixelshades/ui/components"

export function Example() {
	return <Link>Link</Link>
}
`,
  },
  "link/sizes": {
	  component: lazy(() => import("~/examples/link/sizes.tsx")),
	  code: `import { Link } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col">
			<Link size="xs">xs</Link>
			<Link size="sm">sm</Link>
			<Link size="md">md</Link>
			<Link size="lg">lg</Link>
			<Link size="xl">xl</Link>
			<Link size="2xl">2xl</Link>
			<Link size="3xl">3xl</Link>
			<Link size="4xl">4xl</Link>
			<Link size="5xl">5xl</Link>
			<Link size="6xl">6xl</Link>
			<Link size="7xl">7xl</Link>
		</div>
	)
}
`,
  },
  "loading-spinner/button": {
	  component: lazy(() => import("~/examples/loading-spinner/button.tsx")),
	  code: `import { LoadingSpinner } from "@pixelshades/ui/components"
import { Button } from "@pixelshades/ui/components"

export function Example() {
	return <Button before={<LoadingSpinner />}>Loading...</Button>
}
`,
  },
  "loading-spinner/icons": {
	  component: lazy(() => import("~/examples/loading-spinner/icons.tsx")),
	  code: `import { LoadingSpinner } from "@pixelshades/ui/components"
import { Loader } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner />
			<LoadingSpinner icon={<Loader />} />
		</div>
	)
}
`,
  },
  "loading-spinner/preview": {
	  component: lazy(() => import("~/examples/loading-spinner/preview.tsx")),
	  code: `import { LoadingSpinner } from "@pixelshades/ui/components"

export function Example() {
	return <LoadingSpinner />
}
`,
  },
  "loading-spinner/sizes": {
	  component: lazy(() => import("~/examples/loading-spinner/sizes.tsx")),
	  code: `import { LoadingSpinner } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner size="xs" />
			<LoadingSpinner size="sm" />
			<LoadingSpinner size="md" />
			<LoadingSpinner size="lg" />
			<LoadingSpinner size="xl" />
		</div>
	)
}
`,
  },
  "loading-spinner/variants": {
	  component: lazy(() => import("~/examples/loading-spinner/variants.tsx")),
	  code: `import { LoadingSpinner } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner variant="default" />
			<LoadingSpinner variant="info" />
			<LoadingSpinner variant="alert" />
		</div>
	)
}
`,
  },
  "menu/preview": {
	  component: lazy(() => import("~/examples/menu/preview.tsx")),
	  code: `import { Button, Menu } from "@pixelshades/ui/components"
import { DownloadIcon, EyeOffIcon, MailIcon, PinIcon, RedoIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div>
			<Menu aria-label="Menu">
				<Button>Open Menu</Button>

				<Menu.Content>
					<Menu.Section aria-label="Actions">
						<Menu.Label>Actions</Menu.Label>
						<Menu.Item aria-label="Reply">
							<RedoIcon className="size-4 text-subtle-foreground" />
							<span>Reply</span>
							<Menu.Shortcut keys={["option"]}>R</Menu.Shortcut>
						</Menu.Item>
						<Menu.Item aria-label="Pin">
							<PinIcon className="size-4 text-subtle-foreground" />
							<span>Pin</span>
							<Menu.Shortcut keys={["option"]}>P</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>

					<Menu.Separator />

					<Menu.Section>
						<Menu.Item aria-label="Save this message">
							<DownloadIcon className="size-4 text-subtle-foreground" />
							<span>Save this message</span>
							<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Mark as unread">
							<EyeOffIcon className="size-4 text-subtle-foreground" />
							<span>Mark as unread</span>
							<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Share via email">
							<MailIcon className="size-4 text-subtle-foreground" />
							<span>Share via email</span>
							<Menu.Shortcut keys={["command"]}>U</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>
				</Menu.Content>
			</Menu>
		</div>
	)
}
`,
  },
  "menu/sub-menu": {
	  component: lazy(() => import("~/examples/menu/sub-menu.tsx")),
	  code: `import { Button, Menu } from "@pixelshades/ui/components"
import { DownloadIcon, EyeOffIcon, MailIcon, PinIcon, RedoIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div>
			<Menu aria-label="Menu">
				<Button>Open Menu</Button>

				<Menu.Content>
					<Menu.Section aria-label="Actions">
						<Menu.Label>Actions</Menu.Label>
						<Menu.Item aria-label="Reply">
							<RedoIcon className="size-4 text-subtle-foreground" />
							<span>Reply</span>
							<Menu.Shortcut keys={["option"]}>R</Menu.Shortcut>
						</Menu.Item>
						<Menu.Item aria-label="Pin">
							<PinIcon className="size-4 text-subtle-foreground" />
							<span>Pin</span>
							<Menu.Shortcut keys={["option"]}>P</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>

					<Menu.Separator />

					<Menu.Section>
						<Menu.Item aria-label="Save this message">
							<DownloadIcon className="size-4 text-subtle-foreground" />
							<span>Save this message</span>
							<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Mark as unread">
							<EyeOffIcon className="size-4 text-subtle-foreground" />
							<span>Mark as unread</span>
							<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
						</Menu.Item>

						<Menu.SubMenu aria-label="Sub Menu">
							<Menu.SubMenuTrigger aria-label="Sub Menu">Sub Menu</Menu.SubMenuTrigger>
							<Menu.Content aria-label="Sub Menu">
								<Menu.Section>
									<Menu.Label>Sub Menu</Menu.Label>
									<Menu.Item aria-label="Save this message">
										<DownloadIcon className="size-4 text-subtle-foreground" />
										<span>Save this message</span>
										<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
									</Menu.Item>

									<Menu.Item aria-label="Mark as unread">
										<EyeOffIcon className="size-4 text-subtle-foreground" />
										<span>Mark as unread</span>
										<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
									</Menu.Item>

									<Menu.Item aria-label="Share via email">
										<MailIcon className="size-4 text-subtle-foreground" />
										<span>Share via email</span>
										<Menu.Shortcut keys={["command"]}>U</Menu.Shortcut>
									</Menu.Item>
								</Menu.Section>
							</Menu.Content>
						</Menu.SubMenu>

						<Menu.Item aria-label="Share via email">
							<MailIcon className="size-4 text-subtle-foreground" />
							<span>Share via email</span>
							<Menu.Shortcut keys={["command"]}>U</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>
				</Menu.Content>
			</Menu>
		</div>
	)
}
`,
  },
  "number-field/controlled": {
	  component: lazy(() => import("~/examples/number-field/controlled.tsx")),
	  code: `import { NumberField } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState(0)
	return (
		<NumberField
			value={value}
			onChange={setValue}
			label="Number of Items"
			description="How many items do you want to add?"
			helperText="Helper Text"
		/>
	)
}
`,
  },
  "number-field/currency-format": {
	  component: lazy(() => import("~/examples/number-field/currency-format.tsx")),
	  code: `import { NumberField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<NumberField
			label="Transaction amount"
			name="amount"
			defaultValue={45}
			formatOptions={{
				style: "currency",
				currency: "EUR",
			}}
		/>
	)
}
`,
  },
  "number-field/percentage-format": {
	  component: lazy(() => import("~/examples/number-field/percentage-format.tsx")),
	  code: `import { NumberField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<NumberField
			label="Sales tax"
			defaultValue={0.45}
			formatOptions={{
				style: "percent",
			}}
		/>
	)
}
`,
  },
  "number-field/preview": {
	  component: lazy(() => import("~/examples/number-field/preview.tsx")),
	  code: `import { NumberField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<NumberField
			label="Number of Items"
			description="How many items do you want to add?"
			helperText="Helper Text"
		/>
	)
}
`,
  },
  "popover/preview": {
	  component: lazy(() => import("~/examples/popover/preview.tsx")),
	  code: `import { Button, Input, Label, Popover } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Popover.Trigger>
			<Button variant="outline">Open popover</Button>
			<Popover className="w-80" showArrow>
				<Popover.Content>
					<div className="grid gap-lg">
						<div className="space-y-2">
							<h4 className="font-medium leading-none">Dimensions</h4>
							<p className="text-sm text-subtle-foreground">Set the dimensions for the layer.</p>
						</div>
						<div className="grid gap-md">
							<div className="grid grid-cols-3 items-center gap-lg">
								<Label htmlFor="width">Width</Label>
								<Input id="width" defaultValue="100%" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-lg">
								<Label htmlFor="maxWidth">Max. width</Label>
								<Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-lg">
								<Label htmlFor="height">Height</Label>
								<Input id="height" defaultValue="25px" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-lg">
								<Label htmlFor="maxHeight">Max. height</Label>
								<Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
							</div>
						</div>
					</div>
				</Popover.Content>
			</Popover>
		</Popover.Trigger>
	)
}
`,
  },
  "progressBar/labeling": {
	  component: lazy(() => import("~/examples/progressBar/labeling.tsx")),
	  code: `import { ProgressBar } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex w-full flex-col gap-lg">
			<ProgressBar label="Sending…" formatOptions={{ style: "currency", currency: "JPY" }} value={60} />
			<ProgressBar label="Feeding…" valueLabel="30 of 100 dogs" value={30} />
		</div>
	)
}
`,
  },
  "progressBar/preview": {
	  component: lazy(() => import("~/examples/progressBar/preview.tsx")),
	  code: `import { ProgressBar } from "@pixelshades/ui/components"

export function Example() {
	return <ProgressBar label="Loading…" description={<small>This is a description!</small>} value={25} />
}
`,
  },
  "progressBar/sizes": {
	  component: lazy(() => import("~/examples/progressBar/sizes.tsx")),
	  code: `import { ProgressBar } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="gap-lg·flex·flex-col·w-full">
			<ProgressBar size="xs" label="XS" description={<small>This is a description!</small>} value={25} />
			<ProgressBar size="sm" label="SM" description={<small>This is a description!</small>} value={45} />
			<ProgressBar size="md" label="MD" description={<small>This is a description!</small>} value={65} />
			<ProgressBar size="lg" label="LG" description={<small>This is a description!</small>} value={85} />
		</div>
	)
}
`,
  },
  "progressBar/valueScale": {
	  component: lazy(() => import("~/examples/progressBar/valueScale.tsx")),
	  code: `import { ProgressBar } from "@pixelshades/ui/components"

export function Example() {
	return <ProgressBar label="Scale" minValue={10} maxValue={125} value={25} />
}
`,
  },
  "progressBar/variants": {
	  component: lazy(() => import("~/examples/progressBar/variants.tsx")),
	  code: `import { ProgressBar } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex w-full flex-col gap-lg">
			<ProgressBar variant="default" label="Default" value={25} />
			<ProgressBar variant="info" label="Info" value={45} />
			<ProgressBar variant="alert" label="Alert" value={75} />
			<ProgressBar variant="outline" label="Outline" value={95} />
		</div>
	)
}
`,
  },
  "radio-group/card": {
	  component: lazy(() => import("~/examples/radio-group/card.tsx")),
	  code: `import { RadioGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<RadioGroup defaultValue="dog" orientation="horizontal" label="Favorite pet" description="Description">
			<RadioGroup.Card value="dog">Dog</RadioGroup.Card>
			<RadioGroup.Card value="cat">Cat</RadioGroup.Card>
			<RadioGroup.Card value="dragon">Dragon</RadioGroup.Card>
		</RadioGroup>
	)
}
`,
  },
  "radio-group/horizontal": {
	  component: lazy(() => import("~/examples/radio-group/horizontal.tsx")),
	  code: `import { RadioGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<RadioGroup
			defaultValue="dog"
			orientation="horizontal"
			label="Favorite pet"
			description="Description"
			helperText="WOW"
		>
			<RadioGroup.Item value="dog">Dog</RadioGroup.Item>
			<RadioGroup.Item value="cat">Cat</RadioGroup.Item>
			<RadioGroup.Item value="dragon">Dragon</RadioGroup.Item>
		</RadioGroup>
	)
}
`,
  },
  "radio-group/preview": {
	  component: lazy(() => import("~/examples/radio-group/preview.tsx")),
	  code: `import { Label, RadioGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<RadioGroup defaultValue="dog">
			<Label>Favorite pet</Label>
			<RadioGroup.Item value="dog">Dog</RadioGroup.Item>
			<RadioGroup.Item value="cat">Cat</RadioGroup.Item>
			<RadioGroup.Item value="dragon">Dragon</RadioGroup.Item>
		</RadioGroup>
	)
}
`,
  },
  "range-calendar/custom-duration": {
	  component: lazy(() => import("~/examples/range-calendar/custom-duration.tsx")),
	  code: `import { RangeCalendar } from "@pixelshades/ui/components"

export function Example() {
	return (
		<RangeCalendar
			visibleDuration={{
				months: 3,
			}}
		/>
	)
}
`,
  },
  "range-calendar/disabled": {
	  component: lazy(() => import("~/examples/range-calendar/disabled.tsx")),
	  code: `import { RangeCalendar } from "@pixelshades/ui/components"

export function Example() {
	return <RangeCalendar isDisabled />
}
`,
  },
  "range-calendar/min-dates": {
	  component: lazy(() => import("~/examples/range-calendar/min-dates.tsx")),
	  code: `import { getLocalTimeZone, today } from "@internationalized/date"
import { RangeCalendar } from "@pixelshades/ui/components"

export function Example() {
	const now = today(getLocalTimeZone())

	return <RangeCalendar minValue={now} maxValue={now.add({ days: 15 })} />
}
`,
  },
  "range-calendar/preview": {
	  component: lazy(() => import("~/examples/range-calendar/preview.tsx")),
	  code: `import { RangeCalendar } from "@pixelshades/ui/components"

export function Example() {
	return <RangeCalendar />
}
`,
  },
  "range-calendar/unavailable-dates": {
	  component: lazy(() => import("~/examples/range-calendar/unavailable-dates.tsx")),
	  code: `"use client"

import { isWeekend } from "@internationalized/date"
import { RangeCalendar } from "@pixelshades/ui/components"
import { useLocale } from "@pixelshades/ui/hooks"

export function Example() {
	const { locale } = useLocale()

	return <RangeCalendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}
`,
  },
  "select/preview": {
	  component: lazy(() => import("~/examples/select/preview.tsx")),
	  code: `import { Select } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Select label="Framework" description="Description" helperText="Helper Text" tooltip="Tooltip">
			<Select.Item>React</Select.Item>
			<Select.Item>Qwik</Select.Item>
			<Select.Item>Vue</Select.Item>
			<Select.Item>Svelte</Select.Item>
			<Select.Section>
				<Select.Label>Others</Select.Label>
				<Select.Item>Angular</Select.Item>
				<Select.Item>JQuery</Select.Item>
			</Select.Section>
		</Select>
	)
}
`,
  },
  "separator/orientation": {
	  component: lazy(() => import("~/examples/separator/orientation.tsx")),
	  code: `import { Separator } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				Content above
				<Separator />
				Content below
			</div>
			<div className="mt-5 flex h-10 items-center">
				Content left
				<Separator orientation="vertical" />
				Content right
			</div>
		</div>
	)
}
`,
  },
  "separator/preview": {
	  component: lazy(() => import("~/examples/separator/preview.tsx")),
	  code: `import { Separator } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				Content above
				<Separator />
				Content below
			</div>
		</div>
	)
}
`,
  },
  "slider/controlled": {
	  component: lazy(() => import("~/examples/slider/controlled.tsx")),
	  code: `import { Slider } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState(25)

	return (
		<Slider
			label="Slide to change the value"
			description={<small>This is a description!</small>}
			defaultValue={30}
			onChangeEnd={(value) => setValue(value as number)}
		/>
	)
}
`,
  },
  "slider/disabled": {
	  component: lazy(() => import("~/examples/slider/disabled.tsx")),
	  code: `import { Slider } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Slider
			label="Slide to change the value"
			description={<small>This is a description!</small>}
			helperText="helper text"
			isDisabled
			defaultValue={30}
		/>
	)
}
`,
  },
  "slider/labeling": {
	  component: lazy(() => import("~/examples/slider/labeling.tsx")),
	  code: `import { Slider } from "@pixelshades/ui/components"

export function Example() {
	return <Slider label="Sending…" formatOptions={{ style: "currency", currency: "JPY" }} defaultValue={60} />
}
`,
  },
  "slider/multithrumb": {
	  component: lazy(() => import("~/examples/slider/multithrumb.tsx")),
	  code: `import { Slider } from "@pixelshades/ui/components"

export function Example() {
	return <Slider label="Range" helperText="helper text" thumbLabels={["start", "end"]} defaultValue={[30, 60]} />
}
`,
  },
  "slider/orientation": {
	  component: lazy(() => import("~/examples/slider/orientation.tsx")),
	  code: `import { Slider } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="h-80">
			<Slider
				label="Slide up and down"
				orientation="vertical"
				description={<small>This is a description!</small>}
				defaultValue={30}
			/>
		</div>
	)
}
`,
  },
  "slider/preview": {
	  component: lazy(() => import("~/examples/slider/preview.tsx")),
	  code: `import { Slider } from "@pixelshades/ui/components"

export function Example() {
	return <Slider label="Slide to change the value" description={<small>This is a description!</small>} helperText="helper text" defaultValue={30} />
}
`,
  },
  "slider/valueScale": {
	  component: lazy(() => import("~/examples/slider/valueScale.tsx")),
	  code: `import { Slider } from "@pixelshades/ui/components"

export function Example() {
	return <Slider label="Price range" minValue={50} maxValue={150} defaultValue={100} />
}
`,
  },
  "switch/controlled": {
	  component: lazy(() => import("~/examples/switch/controlled.tsx")),
	  code: `import { Switch } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState(false)

	return (
		<div className="flex flex-col gap-xl">
			<div>value: {value ? "true" : "false"}</div>
			<Switch label="Label" defaultSelected={value} onChange={(value) => setValue(value as boolean)} />
		</div>
	)
}
`,
  },
  "switch/disabled": {
	  component: lazy(() => import("~/examples/switch/disabled.tsx")),
	  code: `import { Switch } from "@pixelshades/ui/components"

export function Example() {
	return <Switch label="Label" isDisabled />
}
`,
  },
  "switch/errorMessage": {
	  component: lazy(() => import("~/examples/switch/errorMessage.tsx")),
	  code: `import { Switch } from "@pixelshades/ui/components"

export function Example() {
	return <Switch label="Label" errorMessage="Error" />
}
`,
  },
  "switch/helperText": {
	  component: lazy(() => import("~/examples/switch/helperText.tsx")),
	  code: `import { Switch } from "@pixelshades/ui/components"

export function Example() {
	return <Switch label="Label" helperText="Helper text" />
}
`,
  },
  "switch/preview": {
	  component: lazy(() => import("~/examples/switch/preview.tsx")),
	  code: `import { Switch } from "@pixelshades/ui/components"

export function Example() {
	return <Switch defaultSelected={true} label="Label" description="Description text" tooltip="Tooltip" />
}
`,
  },
  "switch/readOnly": {
	  component: lazy(() => import("~/examples/switch/readOnly.tsx")),
	  code: `import { Switch } from "@pixelshades/ui/components"

export function Example() {
	return <Switch label="Label" isReadOnly />
}
`,
  },
  "table/preview": {
	  component: lazy(() => import("~/examples/table/preview.tsx")),
	  code: `import { Table } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Table aria-label="Tokens">
			<Table.Header>
				<Table.Column isRowHeader>Name</Table.Column>
				<Table.Column>Token</Table.Column>
				<Table.Column>Env</Table.Column>
				<Table.Column>Cost</Table.Column>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Dev</Table.Cell>
					<Table.Cell>****1852</Table.Cell>
					<Table.Cell>preview</Table.Cell>
					<Table.Cell>$12.43</Table.Cell>
				</Table.Row>

				<Table.Row>
					<Table.Cell>Production</Table.Cell>
					<Table.Cell>****3345</Table.Cell>
					<Table.Cell>prod</Table.Cell>
					<Table.Cell>$13.01k</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Staging</Table.Cell>
					<Table.Cell>****6431</Table.Cell>
					<Table.Cell>preview</Table.Cell>
					<Table.Cell>$11.32</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	)
}
`,
  },
  "table/with-selection": {
	  component: lazy(() => import("~/examples/table/with-selection.tsx")),
	  code: `import { Table } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Table aria-label="Tokens" selectionMode="multiple">
			<Table.Header>
				<Table.Column isRowHeader>Name</Table.Column>
				<Table.Column>Token</Table.Column>
				<Table.Column>Env</Table.Column>
				<Table.Column>Cost</Table.Column>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Dev</Table.Cell>
					<Table.Cell>****1852</Table.Cell>
					<Table.Cell>preview</Table.Cell>
					<Table.Cell>$12.43</Table.Cell>
				</Table.Row>

				<Table.Row>
					<Table.Cell>Production</Table.Cell>
					<Table.Cell>****3345</Table.Cell>
					<Table.Cell>prod</Table.Cell>
					<Table.Cell>$13.01k</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Staging</Table.Cell>
					<Table.Cell>****6431</Table.Cell>
					<Table.Cell>preview</Table.Cell>
					<Table.Cell>$11.32</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	)
}
`,
  },
  "tabs/outline": {
	  component: lazy(() => import("~/examples/tabs/outline.tsx")),
	  code: `import { Tabs } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Tabs variant="outline">
			<Tabs.List aria-label="Dashbord Panels">
				<Tabs.Tab id="panel-1">Panel 1</Tabs.Tab>
				<Tabs.Tab id="panel-2">Panel 2</Tabs.Tab>
				<Tabs.Tab id="panel-3">Panel 3</Tabs.Tab>
			</Tabs.List>
			<Tabs.Panel id="panel-1">Panel 1</Tabs.Panel>
			<Tabs.Panel id="panel-2">Panel 2</Tabs.Panel>
			<Tabs.Panel id="panel-3">Panel 3</Tabs.Panel>
		</Tabs>
	)
}
`,
  },
  "tabs/pill": {
	  component: lazy(() => import("~/examples/tabs/pill.tsx")),
	  code: `import { Tabs } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Tabs variant="pill">
			<Tabs.List aria-label="Dashbord Panels">
				<Tabs.Tab id="panel-1">Panel 1</Tabs.Tab>
				<Tabs.Tab id="panel-2">Panel 2</Tabs.Tab>
				<Tabs.Tab id="panel-3">Panel 3</Tabs.Tab>
			</Tabs.List>
			<Tabs.Panel id="panel-1">Panel 1</Tabs.Panel>
			<Tabs.Panel id="panel-2">Panel 2</Tabs.Panel>
			<Tabs.Panel id="panel-3">Panel 3</Tabs.Panel>
		</Tabs>
	)
}
`,
  },
  "tabs/preview": {
	  component: lazy(() => import("~/examples/tabs/preview.tsx")),
	  code: `import { Tabs } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Tabs>
			<Tabs.List aria-label="Dashbord Panels">
				<Tabs.Tab id="panel-1">Panel 1</Tabs.Tab>
				<Tabs.Tab id="panel-2">Panel 2</Tabs.Tab>
				<Tabs.Tab id="panel-3">Panel 3</Tabs.Tab>
			</Tabs.List>
			<Tabs.Panel id="panel-1">Panel 1</Tabs.Panel>
			<Tabs.Panel id="panel-2">Panel 2</Tabs.Panel>
			<Tabs.Panel id="panel-3">Panel 3</Tabs.Panel>
		</Tabs>
	)
}
`,
  },
  "text-field/description": {
	  component: lazy(() => import("~/examples/text-field/description.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return <TextField label="Project" description="Deploy your new project in one-click." />
}
`,
  },
  "text-field/disabled": {
	  component: lazy(() => import("~/examples/text-field/disabled.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return <TextField label="Project" isDisabled />
}
`,
  },
  "text-field/helperText": {
	  component: lazy(() => import("~/examples/text-field/helperText.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-xl">
			<TextField label="Project" helperText="Helper Text" />
			<TextField label="Project" errorMessage="Error message" isInvalid />
		</div>
	)
}
`,
  },
  "text-field/multi-line": {
	  component: lazy(() => import("~/examples/text-field/multi-line.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return <TextField label="Project" rows={5} multiLine />
}
`,
  },
  "text-field/preview": {
	  component: lazy(() => import("~/examples/text-field/preview.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return <TextField label="Project" />
}
`,
  },
  "text-field/readonly": {
	  component: lazy(() => import("~/examples/text-field/readonly.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return <TextField label="Project" isReadOnly />
}
`,
  },
  "text-field/validation": {
	  component: lazy(() => import("~/examples/text-field/validation.tsx")),
	  code: `import { Button, TextField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<form className="flex flex-col gap-xl">
			<TextField label="Project" isRequired />
			<div className="grid auto-cols-fr grid-flow-col gap-lg">
				<Button type="submit">Submit</Button>
				<Button type="reset" variant="subtle">
					Reset
				</Button>
			</div>
		</form>
	)
}
`,
  },
  "time-field/disabled": {
	  component: lazy(() => import("~/examples/time-field/disabled.tsx")),
	  code: `import { TimeField } from "@pixelshades/ui/components"

export function Example() {
	return <TimeField label="Start Time" isDisabled />
}
`,
  },
  "time-field/granularity": {
	  component: lazy(() => import("~/examples/time-field/granularity.tsx")),
	  code: `import { TimeField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<TimeField label="Hour" granularity="hour" />
			<TimeField label="Minute" granularity="minute" />
			<TimeField label="Second" granularity="second" />
		</div>
	)
}
`,
  },
  "time-field/preview": {
	  component: lazy(() => import("~/examples/time-field/preview.tsx")),
	  code: `import { TimeField } from "@pixelshades/ui/components"

export function Example() {
	return <TimeField label="Start Time" />
}
`,
  },
  "time-field/readonly": {
	  component: lazy(() => import("~/examples/time-field/readonly.tsx")),
	  code: `import { Time } from "@internationalized/date"
import { TimeField } from "@pixelshades/ui/components"

export function Example() {
	return <TimeField label="Start Time" defaultValue={new Time(9)} isReadOnly />
}
`,
  },
  "toggle-button/disabled": {
	  component: lazy(() => import("~/examples/toggle-button/disabled.tsx")),
	  code: `import { ToggleButton } from "@pixelshades/ui/components"
import { Snail } from "@pixelshades/ui/icons"

export function Example() {
	return <ToggleButton isDisabled>Toggle</ToggleButton>
}
`,
  },
  "toggle-button/ghost": {
	  component: lazy(() => import("~/examples/toggle-button/ghost.tsx")),
	  code: `import { ToggleButton } from "@pixelshades/ui/components"

export function Example() {
	return <ToggleButton variant="ghost">Toggle</ToggleButton>
}
`,
  },
  "toggle-button/outline": {
	  component: lazy(() => import("~/examples/toggle-button/outline.tsx")),
	  code: `import { ToggleButton } from "@pixelshades/ui/components"

export function Example() {
	return <ToggleButton variant="outline">Toggle</ToggleButton>
}
`,
  },
  "toggle-button/preview": {
	  component: lazy(() => import("~/examples/toggle-button/preview.tsx")),
	  code: `import { ToggleButton } from "@pixelshades/ui/components"
import { Snail } from "@pixelshades/ui/icons"

export function Example() {
	return <ToggleButton before={<Snail />}>Toggle</ToggleButton>
}
`,
  },
  "toggle-button/sizes": {
	  component: lazy(() => import("~/examples/toggle-button/sizes.tsx")),
	  code: `import { ToggleButton } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-2">
			<ToggleButton size="xs">Toggle</ToggleButton>
			<ToggleButton size="sm">Toggle</ToggleButton>
			<ToggleButton size="md">Toggle</ToggleButton>
			<ToggleButton size="lg">Toggle</ToggleButton>
		</div>
	)
}
`,
  },
  "toggle-button/subtle": {
	  component: lazy(() => import("~/examples/toggle-button/subtle.tsx")),
	  code: `import { ToggleButton } from "@pixelshades/ui/components"

export function Example() {
	return <ToggleButton variant="subtle">Toggle</ToggleButton>
}
`,
  },
  "tooltip/crossoffset": {
	  component: lazy(() => import("~/examples/tooltip/crossoffset.tsx")),
	  code: `import { Tooltip } from "@pixelshades/ui/components"

export function Example() {
	return <Tooltip crossOffset={50}>Small Little Tooltip</Tooltip>
}
`,
  },
  "tooltip/custom": {
	  component: lazy(() => import("~/examples/tooltip/custom.tsx")),
	  code: `import { Button, Tooltip } from "@pixelshades/ui/components"
import { SaveIcon } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Tooltip.Root>
			<Button variant="solid">
				<SaveIcon />
			</Button>
			<Tooltip.Content>Save</Tooltip.Content>
		</Tooltip.Root>
	)
}
`,
  },
  "tooltip/offset": {
	  component: lazy(() => import("~/examples/tooltip/offset.tsx")),
	  code: `import { Tooltip } from "@pixelshades/ui/components"

export function Example() {
	return <Tooltip offset={70}>Small Little Tooltip</Tooltip>
}
`,
  },
  "tooltip/open": {
	  component: lazy(() => import("~/examples/tooltip/open.tsx")),
	  code: `import { Tooltip } from "@pixelshades/ui/components"

export function Example() {
	return <Tooltip defaultOpen>Small Little Tooltip</Tooltip>
}
`,
  },
  "tooltip/placement": {
	  component: lazy(() => import("~/examples/tooltip/placement.tsx")),
	  code: `import { Button, Tooltip } from "@pixelshades/ui/components"
import { useState } from "react"

type Placement = "top" | "right" | "bottom" | "left" | "start" | "end"

export function Example() {
	const [placement, setPlacement] = useState<Placement>("top")

	return (
		<div className="flex flex-col items-center gap-8">
			<ul className="flex flex-row flex-wrap gap-3">
				<li>
					<Button onPress={() => setPlacement("top")}>Top</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("right")}>Right</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("bottom")}>Bottom</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("left")}>Left</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("start")}>Start</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("end")}>End</Button>
				</li>
			</ul>
			<Tooltip placement={placement}>Small Little Tooltip</Tooltip>
		</div>
	)
}
`,
  },
  "tooltip/preview": {
	  component: lazy(() => import("~/examples/tooltip/preview.tsx")),
	  code: `import { Tooltip } from "@pixelshades/ui/components"

export function Example() {
	return <Tooltip>Small Little Tooltip</Tooltip>
}
`,
  },
  "typography/preview": {
	  component: lazy(() => import("~/examples/typography/preview.tsx")),
	  code: `import { Typography } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div>
			<Typography size="xs">xs</Typography>
			<Typography size="sm">sm</Typography>
			<Typography size="md">md</Typography>
			<Typography size="lg">lg</Typography>
			<Typography size="xl">xl</Typography>
			<Typography size="2xl">2xl</Typography>
			<Typography size="3xl">3xl</Typography>
			<Typography size="4xl">4xl</Typography>
			<Typography size="5xl">5xl</Typography>
			<Typography size="6xl">6xl</Typography>
			<Typography size="7xl">7xl</Typography>
		</div>
	)
}
`,
  },
};