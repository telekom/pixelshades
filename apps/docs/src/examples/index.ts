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
    "badge/preview": {
	  component: lazy(() => import("~/examples/badge/preview.tsx")),
	  code: `import { Badge } from "@dv/ui/components"
import { ArrowRightIcon, SmileIcon } from "@dv/ui/icons"

export function Example() {
	return (
		<Badge before={<SmileIcon />} after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "badge/variants": {
	  component: lazy(() => import("~/examples/badge/variants.tsx")),
	  code: `import { Badge } from "@dv/ui/components"
import { ArrowRightIcon, SmileIcon } from "@dv/ui/icons"

export function Example() {
	return (
		<div className="flex flex-wrap gap-lg">
			<Badge variant="default" before={<SmileIcon />} after={<ArrowRightIcon />}>
				Badge Label
			</Badge>
			<Badge variant="alert" before={<SmileIcon />} after={<ArrowRightIcon />}>
				Badge Label
			</Badge>
			<Badge variant="info" before={<SmileIcon />} after={<ArrowRightIcon />}>
				Badge Label
			</Badge>
			<Badge variant="outline" before={<SmileIcon />} after={<ArrowRightIcon />}>
				Badge Label
			</Badge>
		</div>
	)
}
`,
  },
  "breadcrumbs/custom": {
	  component: lazy(() => import("~/examples/breadcrumbs/custom.tsx")),
	  code: `import { Breadcrumb, Breadcrumbs } from "@dv/ui/components"
import { MoveRightIcon } from "@dv/ui/icons"

export function Example() {
	return (
		<Breadcrumbs separator={<MoveRightIcon className="size-4 text-accent" />}>
			<Breadcrumb>Products</Breadcrumb>
			<Breadcrumb>Product</Breadcrumb>
			<Breadcrumb last>Product A</Breadcrumb>
		</Breadcrumbs>
	)
}
`,
  },
  "breadcrumbs/preview": {
	  component: lazy(() => import("~/examples/breadcrumbs/preview.tsx")),
	  code: `import { Breadcrumb, Breadcrumbs } from "@dv/ui/components"

export function Example() {
	return (
		<Breadcrumbs>
			<Breadcrumb>Products</Breadcrumb>
			<Breadcrumb>Product</Breadcrumb>
			<Breadcrumb last>Product A</Breadcrumb>
		</Breadcrumbs>
	)
}
`,
  },
  "button/link": {
	  component: lazy(() => import("~/examples/button/link.tsx")),
	  code: `import { Button } from "@dv/ui/components"

export function Example() {
	return <Button variant="link">Button</Button>
}
`,
  },
  "button/outline": {
	  component: lazy(() => import("~/examples/button/outline.tsx")),
	  code: `import { Button } from "@dv/ui/components"

export function Example() {
	return <Button variant="outline">Button</Button>
}
`,
  },
  "button/preview": {
	  component: lazy(() => import("~/examples/button/preview.tsx")),
	  code: `import { Button } from "@dv/ui/components"
import { SnailIcon } from "@dv/ui/icons"

export function Example() {
	return <Button before={<SnailIcon className="bg-red-600" />}>Button</Button>
}
`,
  },
  "button/solid": {
	  component: lazy(() => import("~/examples/button/solid.tsx")),
	  code: `import { Button } from "@dv/ui/components"

export function Example() {
	return <Button variant="solid">Button</Button>
}
`,
  },
  "button/subtle": {
	  component: lazy(() => import("~/examples/button/subtle.tsx")),
	  code: `import { Button } from "@dv/ui/components"

export function Example() {
	return <Button variant="subtle">Button</Button>
}
`,
  },
  "calendar/custom-duration": {
	  component: lazy(() => import("~/examples/calendar/custom-duration.tsx")),
	  code: `import { Calendar } from "@dv/ui/components"

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
	  code: `import { Calendar } from "@dv/ui/components"

export function Example() {
	return <Calendar isDisabled />
}
`,
  },
  "calendar/min-dates": {
	  component: lazy(() => import("~/examples/calendar/min-dates.tsx")),
	  code: `import { Calendar } from "@dv/ui/components"
import { getLocalTimeZone, today } from "@internationalized/date"

export function Example() {
	const now = today(getLocalTimeZone())

	return <Calendar minValue={now} maxValue={now.add({ days: 15 })} />
}
`,
  },
  "calendar/preview": {
	  component: lazy(() => import("~/examples/calendar/preview.tsx")),
	  code: `import { Calendar } from "@dv/ui/components"

export function Example() {
	return <Calendar />
}
`,
  },
  "calendar/unavailable-dates": {
	  component: lazy(() => import("~/examples/calendar/unavailable-dates.tsx")),
	  code: `"use client"

import { Calendar } from "@dv/ui/components"
import { useLocale } from "@dv/ui/hooks"
import { isWeekend } from "@internationalized/date"

export function Example() {
	const { locale } = useLocale()

	return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}
`,
  },
  "card/preview": {
	  component: lazy(() => import("~/examples/card/preview.tsx")),
	  code: `import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Input,
	Label,
	Select,
	SelectItem,
} from "@dv/ui/components"

export function Example() {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-lg">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Name of your project" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Select label="Framework">
								<SelectItem id="next">Next.js</SelectItem>
								<SelectItem id="sveltekit">SvelteKit</SelectItem>
								<SelectItem id="astro">Astro</SelectItem>
								<SelectItem id="nuxt">Nuxt.js</SelectItem>
							</Select>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
			</CardFooter>
		</Card>
	)
}
`,
  },
  "checkbox/preview": {
	  component: lazy(() => import("~/examples/checkbox/preview.tsx")),
	  code: `import { Checkbox } from "@dv/ui/components"

export function Example() {
	return <Checkbox value="push">Push</Checkbox>
}
`,
  },
  "checkbox-group/preview": {
	  component: lazy(() => import("~/examples/checkbox-group/preview.tsx")),
	  code: `import { Checkbox, CheckboxGroup } from "@dv/ui/components"

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
	  code: `import { ComboBox, ComboBoxItem } from "@dv/ui/components"

export function Example() {
	return (
		<ComboBox label="Project">
			<ComboBoxItem>Health Dashboard</ComboBoxItem>
			<ComboBoxItem>To-Do App</ComboBoxItem>
			<ComboBoxItem>UI Kit</ComboBoxItem>
			<ComboBoxItem>Portfolio Site</ComboBoxItem>
		</ComboBox>
	)
}
`,
  },
  "command/controlled": {
	  component: lazy(() => import("~/examples/command/controlled.tsx")),
	  code: `import {
	Button,
	Command,
	CommandGroup,
	CommandItem,
	CommandItemDescription,
	CommandItemTitle,
	CommandSearch,
	Typography,
} from "@dv/ui/components"
import { Apple, CommandIcon, GlassWater } from "@dv/ui/icons"
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
				searchField={<CommandSearch />}
				onOpenChange={setOpen}
				open={open}
				disableIntegratedSearch
			>
				<CommandGroup heading="Fruits">
					{fruits.map((fruit, index) => (
						<CommandItem key={fruit.name + index} before={<Apple />} className={"items-center"}>
							<div className="flex flex-col items-center gap-2">
								<CommandItemTitle>{fruit.name}</CommandItemTitle>
								{fruit.description && (
									<CommandItemDescription>{fruit.description}</CommandItemDescription>
								)}
							</div>
						</CommandItem>
					))}
				</CommandGroup>
				<CommandGroup heading="Drinks">
					{drinks.map((drink) => (
						<CommandItem key={drink.name} before={<GlassWater />} className={"items-center"}>
							<div className="flex flex-col gap-2">
								<CommandItemTitle>{drink.name}</CommandItemTitle>
								{drink.description && (
									<CommandItemDescription>{drink.description}</CommandItemDescription>
								)}
							</div>
						</CommandItem>
					))}
				</CommandGroup>
			</Command>
		</div>
	)
}
`,
  },
  "command/preview": {
	  component: lazy(() => import("~/examples/command/preview.tsx")),
	  code: `import {
	Command,
	CommandGroup,
	CommandItem,
	CommandItemDescription,
	CommandItemTitle,
	CommandSearch,
} from "@dv/ui/components"
import { Apple, GlassWater } from "@dv/ui/icons"

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
		<Command shortcut={["Meta", "KeyX"]} searchField={<CommandSearch />}>
			<CommandGroup heading="Fruits">
				{fruits.map((fruit, index) => (
					<CommandItem
						key={fruit.name + index}
						before={<Apple />}
						searchValues={[fruit.name, fruit.description || ""]}
						className={"items-center"}
					>
						<div className="flex flex-col items-center gap-2">
							<CommandItemTitle>{fruit.name}</CommandItemTitle>
							{fruit.description && <CommandItemDescription>{fruit.description}</CommandItemDescription>}
						</div>
					</CommandItem>
				))}
			</CommandGroup>
			<CommandGroup heading="Drinks">
				{drinks.map((drink) => (
					<CommandItem
						key={drink.name}
						before={<GlassWater />}
						searchValues={[drink.name, drink.description || ""]}
					>
						<div className="flex flex-col gap-2">
							<CommandItemTitle>{drink.name}</CommandItemTitle>
							{drink.description && <CommandItemDescription>{drink.description}</CommandItemDescription>}
						</div>
					</CommandItem>
				))}
			</CommandGroup>
		</Command>
	)
}
`,
  },
  "command/uncontrolled": {
	  component: lazy(() => import("~/examples/command/uncontrolled.tsx")),
	  code: `import {
	Command,
	CommandGroup,
	CommandItem,
	CommandItemDescription,
	CommandItemTitle,
	CommandSearch,
} from "@dv/ui/components"
import { Apple, GlassWater } from "@dv/ui/icons"

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
		<Command shortcut={["Meta", "KeyJ"]} searchField={<CommandSearch />}>
			<CommandGroup heading="Fruits">
				{fruits.map((fruit) => (
					<CommandItem
						key={fruit.name}
						before={<Apple />}
						className={"items-center"}
						searchValues={[fruit.name, fruit.description || ""]}
					>
						<div className="flex flex-col items-center gap-2">
							<CommandItemTitle>{fruit.name}</CommandItemTitle>
							{fruit.description && <CommandItemDescription>{fruit.description}</CommandItemDescription>}
						</div>
					</CommandItem>
				))}
			</CommandGroup>
			<CommandGroup heading="Drinks">
				{drinks.map((drink) => (
					<CommandItem
						key={drink.name}
						before={<GlassWater />}
						className={"items-center"}
						searchValues={[drink.name, drink.description || ""]}
					>
						<div className="flex flex-col gap-2">
							<CommandItemTitle>{drink.name}</CommandItemTitle>
							{drink.description && <CommandItemDescription>{drink.description}</CommandItemDescription>}
						</div>
					</CommandItem>
				))}
			</CommandGroup>
		</Command>
	)
}
`,
  },
  "data-list/preview": {
	  component: lazy(() => import("~/examples/data-list/preview.tsx")),
	  code: `import { DataList, DataListItem, DataListLabel, DataListValue, Link } from "@dv/ui/components"
import { GithubIcon } from "@dv/ui/icons"

export function Example() {
	return (
		<DataList>
			<DataListItem>
				<DataListLabel>Import</DataListLabel>
				<DataListValue>
					<code>
						import {"{ "}
						Button
						{" }"} from "@dv/ui/components"
					</code>
				</DataListValue>
			</DataListItem>
			<DataListItem>
				<DataListLabel>Source</DataListLabel>
				<DataListValue>
					<GithubIcon className="size-3" />
					<Link
						className="text-foreground"
						href={"https://github.com/telekom/pixelshades/tree/main/packages/ui/src/components/ui/button"}
					>
						View Source Code
					</Link>
				</DataListValue>
			</DataListItem>
			<DataListItem>
				<DataListLabel>Owner</DataListLabel>
				<DataListValue>Michael Jackson</DataListValue>
			</DataListItem>
		</DataList>
	)
}
`,
  },
  "date-field/granularity": {
	  component: lazy(() => import("~/examples/date-field/granularity.tsx")),
	  code: `import { DateField } from "@dv/ui/components"

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
	  code: `import { DateField } from "@dv/ui/components"

export function Example() {
	return <DateField label="Start Date" />
}
`,
  },
  "date-picker/granularity": {
	  component: lazy(() => import("~/examples/date-picker/granularity.tsx")),
	  code: `import { DatePicker } from "@dv/ui/components"

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
	  code: `import { DatePicker } from "@dv/ui/components"

export function Example() {
	return <DatePicker label="Start Date" />
}
`,
  },
  "dialog/preview": {
	  component: lazy(() => import("~/examples/dialog/preview.tsx")),
	  code: `import {
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

export function Example() {
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
`,
  },
  "heading/preview": {
	  component: lazy(() => import("~/examples/heading/preview.tsx")),
	  code: `import { Heading, HeadingLevel } from "@dv/ui/components"

export function Example() {
	return (
		<div>
			<Heading>Ag</Heading>
			<HeadingLevel>
				<Heading>Ag</Heading>
				<HeadingLevel>
					<Heading>Ag</Heading>
					<HeadingLevel>
						<Heading>Ag</Heading>
						<HeadingLevel>
							<Heading>Ag</Heading>
							<HeadingLevel>
								<Heading>Ag</Heading>
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
	  code: `import { Highlight, Typography } from "@dv/ui/components"

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
	  code: `import { Highlight, Input, Label, Typography } from "@dv/ui/components"
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
  "input/preview": {
	  component: lazy(() => import("~/examples/input/preview.tsx")),
	  code: `import { Input } from "@dv/ui/components"

export function Example() {
	return <Input placeholder="Some Placeholder" />
}
`,
  },
  "label/preview": {
	  component: lazy(() => import("~/examples/label/preview.tsx")),
	  code: `import { Checkbox, Label } from "@dv/ui/components"

export function Example() {
	return (
		<div className="flex flex-row items-center gap-md">
			<Checkbox />
			<Label>This is a label</Label>
		</div>
	)
}
`,
  },
  "link/active": {
	  component: lazy(() => import("~/examples/link/active.tsx")),
	  code: `import { Link } from "@dv/ui/components"

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
	  code: `import { Link } from "@dv/ui/components"

export function Example() {
	return <Link>Link</Link>
}
`,
  },
  "link/sizes": {
	  component: lazy(() => import("~/examples/link/sizes.tsx")),
	  code: `import { Link } from "@dv/ui/components"

export function Example() {
	return (
		<div className="flex flex-col">
			<Link size="xs">Ag</Link>
			<Link size="sm">Ag</Link>
			<Link size="md">Ag</Link>
			<Link size="lg">Ag</Link>
			<Link size="xl">Ag</Link>
			<Link size="2xl">Ag</Link>
			<Link size="3xl">Ag</Link>
			<Link size="4xl">Ag</Link>
			<Link size="5xl">Ag</Link>
			<Link size="6xl">Ag</Link>
			<Link size="7xl">Ag</Link>
		</div>
	)
}
`,
  },
  "loadingSpinner/button": {
	  component: lazy(() => import("~/examples/loadingSpinner/button.tsx")),
	  code: `import { LoadingSpinner } from "@dv/ui/components"
import { Button } from "@dv/ui/components"

export function Example() {
	return <Button before={<LoadingSpinner />}>Loading...</Button>
}
`,
  },
  "loadingSpinner/icons": {
	  component: lazy(() => import("~/examples/loadingSpinner/icons.tsx")),
	  code: `import { LoadingSpinner } from "@dv/ui/components"
import { Loader, LoaderIcon } from "@dv/ui/icons"

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
  "loadingSpinner/preview": {
	  component: lazy(() => import("~/examples/loadingSpinner/preview.tsx")),
	  code: `import { LoadingSpinner } from "@dv/ui/components"

export function Example() {
	return <LoadingSpinner />
}
`,
  },
  "loadingSpinner/sizes": {
	  component: lazy(() => import("~/examples/loadingSpinner/sizes.tsx")),
	  code: `import { LoadingSpinner } from "@dv/ui/components"

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
  "loadingSpinner/variants": {
	  component: lazy(() => import("~/examples/loadingSpinner/variants.tsx")),
	  code: `import { LoadingSpinner } from "@dv/ui/components"

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
	  code: `import { Button, Menu, MenuContent, MenuHeader, MenuItem, MenuSection, MenuSeperator } from "@dv/ui/components"

export function Example() {
	return (
		<div>
			<Menu>
				<Button>Open Menu</Button>

				<MenuContent>
					<MenuSection>
						<MenuHeader>User Pfoile</MenuHeader>
					</MenuSection>
					<MenuSeperator />

					<MenuItem>Some Menu Item</MenuItem>
					<MenuItem>Another Menu Item</MenuItem>
					<MenuItem>Seperated Last Menu Item</MenuItem>
					<MenuSeperator />
				</MenuContent>
			</Menu>
		</div>
	)
}
`,
  },
  "popover/preview": {
	  component: lazy(() => import("~/examples/popover/preview.tsx")),
	  code: `import { Button, Input, Label, Popover, PopoverTrigger } from "@dv/ui/components"

export function Example() {
	return (
		<PopoverTrigger>
			<Button variant="outline">Open popover</Button>
			<Popover className="w-80">
				<div className="grid gap-lg ">
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
			</Popover>
		</PopoverTrigger>
	)
}
`,
  },
  "progressBar/labeling": {
	  component: lazy(() => import("~/examples/progressBar/labeling.tsx")),
	  code: `import { ProgressBar } from "@dv/ui/components"

export function Example() {
	return (
		<div className="gap-lg flex flex-col w-full">
			<ProgressBar label="Sending…" formatOptions={{ style: "currency", currency: "JPY" }} value={60} />
			<ProgressBar label="Feeding…" valueLabel="30 of 100 dogs" value={30} />
		</div>
	)
}
`,
  },
  "progressBar/preview": {
	  component: lazy(() => import("~/examples/progressBar/preview.tsx")),
	  code: `import { ProgressBar } from "@dv/ui/components"

export function Example() {
	return <ProgressBar label="Loading…" description={<small>This is a description!</small>} value={25} />
}
`,
  },
  "progressBar/sizes": {
	  component: lazy(() => import("~/examples/progressBar/sizes.tsx")),
	  code: `import { ProgressBar } from "@dv/ui/components"

export function Example() {
	return (
		<div className="gap-lg flex flex-col w-full">
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
	  code: `import { ProgressBar } from "@dv/ui/components"

export function Example() {
	return <ProgressBar label="Scale" minValue={10} maxValue={125} value={25} />
}
`,
  },
  "progressBar/variants": {
	  component: lazy(() => import("~/examples/progressBar/variants.tsx")),
	  code: `import { ProgressBar } from "@dv/ui/components"

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
  "radio-group/preview": {
	  component: lazy(() => import("~/examples/radio-group/preview.tsx")),
	  code: `import { Label, Radio, RadioGroup } from "@dv/ui/components"

export function Example() {
	return (
		<RadioGroup defaultValue="dog">
			<Label>Favorite pet</Label>
			<Radio value="dog">Dog</Radio>
			<Radio value="cat">Cat</Radio>
			<Radio value="dragon">Dragon</Radio>
		</RadioGroup>
	)
}
`,
  },
  "select/preview": {
	  component: lazy(() => import("~/examples/select/preview.tsx")),
	  code: `import { Select, SelectItem } from "@dv/ui/components"

export function Example() {
	return (
		<Select label="Framework">
			<SelectItem>React</SelectItem>
			<SelectItem>Qwik</SelectItem>
			<SelectItem>Vue</SelectItem>
			<SelectItem>Svelte</SelectItem>
		</Select>
	)
}
`,
  },
  "separator/preview": {
	  component: lazy(() => import("~/examples/separator/preview.tsx")),
	  code: `import { Separator } from "@dv/ui/components"

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
  "switch/preview": {
	  component: lazy(() => import("~/examples/switch/preview.tsx")),
	  code: `import { Switch } from "@dv/ui/components"

export function Example() {
	return <Switch />
}
`,
  },
  "table/preview": {
	  component: lazy(() => import("~/examples/table/preview.tsx")),
	  code: `import {
	type Select,
	SelectItem,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@dv/ui/components"

export function Example() {
	return (
		<Table aria-label="Tokens">
			<TableHeader>
				<TableColumn isRowHeader>Name</TableColumn>
				<TableColumn>Token</TableColumn>
				<TableColumn>Env</TableColumn>
				<TableColumn>Cost</TableColumn>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Dev</TableCell>
					<TableCell>****1852</TableCell>
					<TableCell>preview</TableCell>
					<TableCell>$12.43</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>Production</TableCell>
					<TableCell>****3345</TableCell>
					<TableCell>prod</TableCell>
					<TableCell>$13.01k</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Staging</TableCell>
					<TableCell>****6431</TableCell>
					<TableCell>preview</TableCell>
					<TableCell>$11.32</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
`,
  },
  "table/with-selection": {
	  component: lazy(() => import("~/examples/table/with-selection.tsx")),
	  code: `import {
	type Select,
	SelectItem,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@dv/ui/components"

export function Example() {
	return (
		<Table aria-label="Tokens" selectionMode="multiple">
			<TableHeader>
				<TableColumn isRowHeader>Name</TableColumn>
				<TableColumn>Token</TableColumn>
				<TableColumn>Env</TableColumn>
				<TableColumn>Cost</TableColumn>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Dev</TableCell>
					<TableCell>****1852</TableCell>
					<TableCell>preview</TableCell>
					<TableCell>$12.43</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>Production</TableCell>
					<TableCell>****3345</TableCell>
					<TableCell>prod</TableCell>
					<TableCell>$13.01k</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Staging</TableCell>
					<TableCell>****6431</TableCell>
					<TableCell>preview</TableCell>
					<TableCell>$11.32</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
`,
  },
  "tabs/preview": {
	  component: lazy(() => import("~/examples/tabs/preview.tsx")),
	  code: `import { Tab, TabPanel, Tabs, TabsList } from "@dv/ui/components"

export function Example() {
	return (
		<Tabs>
			<TabsList aria-label="Dashbord Panels">
				<Tab id="panel-1">Panel 1</Tab>
				<Tab id="panel-2">Panel 2</Tab>
				<Tab id="panel-3">Panel 3</Tab>
			</TabsList>
			<TabPanel id="panel-1">Panel 1</TabPanel>
			<TabPanel id="panel-2">Panel 2</TabPanel>
			<TabPanel id="panel-3">Panel 3</TabPanel>
		</Tabs>
	)
}
`,
  },
  "text-field/preview": {
	  component: lazy(() => import("~/examples/text-field/preview.tsx")),
	  code: `import { TextField } from "@dv/ui/components"

export function Example() {
	return <TextField label="Project" description="Deploy your new project in one-click." />
}
`,
  },
  "time-field/granularity": {
	  component: lazy(() => import("~/examples/time-field/granularity.tsx")),
	  code: `import { TimeField } from "@dv/ui/components"

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
	  code: `import { TimeField } from "@dv/ui/components"

export function Example() {
	return <TimeField label="Start Date" />
}
`,
  },
  "toggle-button/ghost": {
	  component: lazy(() => import("~/examples/toggle-button/ghost.tsx")),
	  code: `import React from "react"
import { ToggleButton } from "@dv/ui/components"

export function Example() {
	return <ToggleButton variant="ghost">Toggle</ToggleButton>
}
`,
  },
  "toggle-button/outline": {
	  component: lazy(() => import("~/examples/toggle-button/outline.tsx")),
	  code: `import React from "react"
import { ToggleButton } from "@dv/ui/components"

export function Example() {
	return <ToggleButton variant="outline">Toggle</ToggleButton>
}
`,
  },
  "toggle-button/preview": {
	  component: lazy(() => import("~/examples/toggle-button/preview.tsx")),
	  code: `import React from "react"
import { ToggleButton } from "@dv/ui/components"
import { Snail } from "@dv/ui/icons"

export function Example() {
	return <ToggleButton before={<Snail />}>Toggle</ToggleButton>
}
`,
  },
  "toggle-button/sizes": {
	  component: lazy(() => import("~/examples/toggle-button/sizes.tsx")),
	  code: `import React from "react"
import { ToggleButton } from "@dv/ui/components"

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
	  code: `import React from "react"
import { ToggleButton } from "@dv/ui/components"

export function Example() {
	return <ToggleButton variant="subtle">Toggle</ToggleButton>
}
`,
  },
  "tooltip/custom": {
	  component: lazy(() => import("~/examples/tooltip/custom.tsx")),
	  code: `import { Button, TooltipContent, TooltipRoot } from "@dv/ui/components"
import { SaveIcon } from "@dv/ui/icons"

export function Example() {
	return (
		<TooltipRoot>
			<Button variant="solid">
				<SaveIcon />
			</Button>
			<TooltipContent>Save</TooltipContent>
		</TooltipRoot>
	)
}
`,
  },
  "tooltip/preview": {
	  component: lazy(() => import("~/examples/tooltip/preview.tsx")),
	  code: `import { Tooltip } from "@dv/ui/components"

export function Example() {
	return <Tooltip>Small Little Tooltip</Tooltip>
}
`,
  },
  "typography/preview": {
	  component: lazy(() => import("~/examples/typography/preview.tsx")),
	  code: `import { Typography } from "@dv/ui/components"

export function Example() {
	return (
		<div>
			<Typography size="xs">Ag</Typography>
			<Typography size="sm">Ag</Typography>
			<Typography size="md">Ag</Typography>
			<Typography size="lg">Ag</Typography>
			<Typography size="xl">Ag</Typography>
			<Typography size="2xl">Ag</Typography>
			<Typography size="3xl">Ag</Typography>
			<Typography size="4xl">Ag</Typography>
			<Typography size="5xl">Ag</Typography>
			<Typography size="6xl">Ag</Typography>
			<Typography size="7xl">Ag</Typography>
		</div>
	)
}
`,
  },
};