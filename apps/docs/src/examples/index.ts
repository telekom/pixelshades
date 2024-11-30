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
    "alert/preview": {
	  component: lazy(() => import("~/examples/alert/preview.tsx")),
	  code: `"use client"

import { Button } from "@pixelshades/ui/components"
import { Alert } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Alert title="Alert title" after={<Button variant="link">Button</Button>}>
			Alert content
		</Alert>
	)
}
`,
  },
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
		<Avatar.Group>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
			/>
		</Avatar.Group>
	)
}
`,
  },
  "avatar/sizes": {
	  component: lazy(() => import("~/examples/avatar/sizes.tsx")),
	  code: `import React from "react"

import { Avatar } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-md md:flex-row">
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="xxs"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="xs"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="sm"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="md"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="lg"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="xl"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="2xl"
			/>
		</div>
	)
}
`,
  },
  "avatar/square": {
	  component: lazy(() => import("~/examples/avatar/square.tsx")),
	  code: `import React from "react"

import { Avatar } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Avatar
			variant="square"
			src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
			alt="@makisuo__"
		/>
	)
}
`,
  },
  "avatar/with-menu": {
	  component: lazy(() => import("~/examples/avatar/with-menu.tsx")),
	  code: `import { Avatar, Menu } from "@pixelshades/ui/components"
import {
	IconBrandGithub,
	IconCloud,
	IconCreditCard,
	IconKeyboard,
	IconLifebuoy,
	IconLogout,
	IconSettings,
	IconUser,
	IconUsers,
} from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Menu>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				button
			/>
			<Menu.Content className="w-56">
				<Menu.Section>
					<Menu.Label>My Account</Menu.Label>
					<Menu.Item>
						<IconUser className="mr-2 h-4 w-4" />
						<span>Profile</span>
						<Menu.Shortcut>⇧⌘P</Menu.Shortcut>
					</Menu.Item>
					<Menu.Item>
						<IconCreditCard className="mr-2 h-4 w-4" />
						<span>Billing</span>
						<Menu.Shortcut>⌘B</Menu.Shortcut>
					</Menu.Item>
					<Menu.Item>
						<IconSettings className="mr-2 h-4 w-4" />
						<span>Settings</span>
						<Menu.Shortcut>⌘S</Menu.Shortcut>
					</Menu.Item>
					<Menu.Item>
						<IconKeyboard className="mr-2 h-4 w-4" />
						<span>Keyboard shortcuts</span>
						<Menu.Shortcut>⌘K</Menu.Shortcut>
					</Menu.Item>
				</Menu.Section>

				<Menu.Separator />
				<Menu.Item>
					<IconBrandGithub className="mr-2 h-4 w-4" />
					<span>GitHub</span>
				</Menu.Item>
				<Menu.Item>
					<IconLifebuoy className="mr-2 h-4 w-4" />
					<span>Support</span>
				</Menu.Item>
				<Menu.Item>
					<IconCloud className="mr-2 h-4 w-4" />
					<span>API</span>
				</Menu.Item>
				<Menu.Separator />
				<Menu.Item>
					<IconLogout className="mr-2 h-4 w-4" />
					<span>Log out</span>
					<Menu.Shortcut>⇧⌘Q</Menu.Shortcut>
				</Menu.Item>
			</Menu.Content>
		</Menu>
	)
}
`,
  },
  "badge/before-after": {
	  component: lazy(() => import("~/examples/badge/before-after.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { IconArrowRight } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-md">
			<Badge before={<IconArrowRight />}>Before Badge</Badge>

			<Badge after={<IconArrowRight />}>After Badge</Badge>
		</div>
	)
}
`,
  },
  "badge/preview": {
	  component: lazy(() => import("~/examples/badge/preview.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { IconArrowRight, IconMoodSmile } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Badge before={<IconMoodSmile />} after={<IconArrowRight />}>
			Badge Label
		</Badge>
	)
}
`,
  },
  "badge/variants": {
	  component: lazy(() => import("~/examples/badge/variants.tsx")),
	  code: `import { Badge } from "@pixelshades/ui/components"
import { IconArrowRight, IconMoodSmile } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div className="flex flex-col gap-md">
			<div className="flex flex-row flex-wrap justify-center gap-md">
				<Badge variant="outline" color="default" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Default
				</Badge>
				<Badge variant="outline" color="primary" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Primary
				</Badge>
				<Badge variant="outline" color="info" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Info
				</Badge>
				<Badge variant="outline" color="success" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Success
				</Badge>
				<Badge variant="outline" color="warning" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Warning
				</Badge>
				<Badge variant="outline" color="destructive" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Destructive
				</Badge>
			</div>
		</div>
	)
}
`,
  },
  "breadcrumbs/custom": {
	  component: lazy(() => import("~/examples/breadcrumbs/custom.tsx")),
	  code: `import { Breadcrumbs } from "@pixelshades/ui/components"
import { IconArrowMoveRight } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Breadcrumbs separator={<IconArrowMoveRight className="size-4 text-subtle" />}>
			<Breadcrumbs.Item>Products</Breadcrumbs.Item>
			<Breadcrumbs.Item>Product</Breadcrumbs.Item>
			<Breadcrumbs.Item>Product A</Breadcrumbs.Item>
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
			<Breadcrumbs.Item>Product A</Breadcrumbs.Item>
		</Breadcrumbs>
	)
}
`,
  },
  "button/before-after": {
	  component: lazy(() => import("~/examples/button/before-after.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"
import { IconSailboat } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div className="flex flex-wrap gap-lg">
			<Button before={<IconSailboat />}>Before</Button>

			<Button after={<IconSailboat />}>After</Button>
		</div>
	)
}
`,
  },
  "button/colors": {
	  component: lazy(() => import("~/examples/button/colors.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<div className="flex flex-row flex-wrap gap-md">
				<Button color="default">Default</Button>
				<Button color="primary">Primary</Button>
				<Button color="destructive">Destructive</Button>
				<Button color="warning">Warning</Button>
			</div>
			<div className="flex flex-row flex-wrap gap-md">
				<Button color="default" variant="outline">
					Default
				</Button>
				<Button color="primary" variant="outline">
					Primary
				</Button>
				<Button color="destructive" variant="outline">
					Destructive
				</Button>
				<Button color="warning" variant="outline">
					Warning
				</Button>
			</div>
			<div className="flex flex-row flex-wrap gap-md">
				<Button color="default" variant="ghost">
					Default
				</Button>
				<Button color="primary" variant="ghost">
					Primary
				</Button>
				<Button color="destructive" variant="ghost">
					Destructive
				</Button>
				<Button color="warning" variant="ghost">
					Warning
				</Button>
			</div>
		</div>
	)
}
`,
  },
  "button/link": {
	  component: lazy(() => import("~/examples/button/link.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"
import { IconSailboat } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Button href="/docs" before={<IconSailboat />}>
			Button
		</Button>
	)
}
`,
  },
  "button/loading": {
	  component: lazy(() => import("~/examples/button/loading.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"
import { IconSailboat } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Button before={<IconSailboat />} isLoading>
			Button
		</Button>
	)
}
`,
  },
  "button/preview": {
	  component: lazy(() => import("~/examples/button/preview.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"
import { IconSailboat } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Button before={<IconSailboat />} color="primary">
			Button
		</Button>
	)
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
  "button/variants": {
	  component: lazy(() => import("~/examples/button/variants.tsx")),
	  code: `import { Button } from "@pixelshades/ui/components"
import { IconShip } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div className="flex flex-row flex-wrap gap-md">
			<Button>Default</Button>
			<Button variant="link">Link Button</Button>
			<Button variant="solid">Solid Button</Button>
			<Button variant="outline">Outlined Button</Button>
			<Button variant="ghost">Ghost Button</Button>
			<Button variant="icon" size="icon">
				<IconShip />
			</Button>
		</div>
	)
}
`,
  },
  "button-group/colors": {
	  component: lazy(() => import("~/examples/button-group/colors.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<ButtonGroup color="default">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup color="primary">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup color="destructive">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup color="warning">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
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
  "button-group/sizes": {
	  component: lazy(() => import("~/examples/button-group/sizes.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col items-center justify-center gap-md">
			<ButtonGroup size="xs">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup size="sm">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup size="md">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup size="lg">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
	)
}
`,
  },
  "button-group/variants": {
	  component: lazy(() => import("~/examples/button-group/variants.tsx")),
	  code: `import { Button, ButtonGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<ButtonGroup variant="solid">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup variant="ghost">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup variant="outline">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup variant="link">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
	)
}
`,
  },
  "calendar/controlled": {
	  component: lazy(() => import("~/examples/calendar/controlled.tsx")),
	  code: `"use client"

import { Calendar, type DateValue } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState<DateValue>()
	return <Calendar value={value} onChange={setValue} />
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
  "calendar/error-message": {
	  component: lazy(() => import("~/examples/calendar/error-message.tsx")),
	  code: `import { Calendar } from "@pixelshades/ui/components"

export function Example() {
	return <Calendar errorMessage="Invalid Date" isInvalid={true} />
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
  "calendar/read-only": {
	  component: lazy(() => import("~/examples/calendar/read-only.tsx")),
	  code: `import { Calendar } from "@pixelshades/ui/components"

export function Example() {
	return <Calendar isReadOnly />
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
	  code: `import { Button, Card, Select, TextField } from "@pixelshades/ui/components"

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
							<TextField label="Name" id="name" placeholder="Name of your project" />
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
	  code: `import { Checkbox } from "@pixelshades/ui/components"

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
  "combobox/controlled": {
	  component: lazy(() => import("~/examples/combobox/controlled.tsx")),
	  code: `"use client"

import { ComboBox } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState("health")

	return (
		<ComboBox label="Project" inputValue={value} onInputChange={setValue}>
			<ComboBox.Item id="health">Health Dashboard</ComboBox.Item>
			<ComboBox.Item id="todo">To-Do App</ComboBox.Item>
			<ComboBox.Item id="ui">UI Kit</ComboBox.Item>
			<ComboBox.Item id="portfolio">Portfolio Site</ComboBox.Item>
		</ComboBox>
	)
}
`,
  },
  "combobox/custom-value": {
	  component: lazy(() => import("~/examples/combobox/custom-value.tsx")),
	  code: `import { ComboBox } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ComboBox label="Project" allowsCustomValue>
			<ComboBox.Item>Health Dashboard</ComboBox.Item>
			<ComboBox.Item>To-Do App</ComboBox.Item>
			<ComboBox.Item>UI Kit</ComboBox.Item>
			<ComboBox.Item>Portfolio Site</ComboBox.Item>
		</ComboBox>
	)
}
`,
  },
  "combobox/default-selected": {
	  component: lazy(() => import("~/examples/combobox/default-selected.tsx")),
	  code: `import { ComboBox } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ComboBox label="Project" defaultSelectedKey="health">
			<ComboBox.Item id="health">Health Dashboard</ComboBox.Item>
			<ComboBox.Item id="todo">To-Do App</ComboBox.Item>
			<ComboBox.Item id="ui">UI Kit</ComboBox.Item>
			<ComboBox.Item id="portfolio">Portfolio Site</ComboBox.Item>
		</ComboBox>
	)
}
`,
  },
  "combobox/loading": {
	  component: lazy(() => import("~/examples/combobox/loading.tsx")),
	  code: `import { ComboBox } from "@pixelshades/ui/components"

import { useAsyncList } from "react-stately"

export function Example() {
	const list = useAsyncList<any>({
		async load({ signal }) {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon", { signal })
			const json = await res.json()
			return { items: json.results }
		},
	})

	return (
		<ComboBox label="Project" items={list.items} isLoading={list.isLoading}>
			{(item) => <ComboBox.Item id={item.name}>{item.name}</ComboBox.Item>}
		</ComboBox>
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
  "combobox/with-helper-text": {
	  component: lazy(() => import("~/examples/combobox/with-helper-text.tsx")),
	  code: `import { ComboBox } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ComboBox label="Project" helperText="You can display anything here">
			<ComboBox.Item>Health Dashboard</ComboBox.Item>
			<ComboBox.Item>To-Do App</ComboBox.Item>
			<ComboBox.Item>UI Kit</ComboBox.Item>
			<ComboBox.Item>Portfolio Site</ComboBox.Item>
		</ComboBox>
	)
}
`,
  },
  "combobox/with-tooltip": {
	  component: lazy(() => import("~/examples/combobox/with-tooltip.tsx")),
	  code: `import { ComboBox } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ComboBox label="Project" tooltip="You can display anything here">
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
	  code: `"use client"

import { Command } from "@pixelshades/ui/components"
import { IconApple, IconGlass } from "@pixelshades/ui/icons"
import { useState } from "react"

export function Example() {
	const [inputValue, setInputValue] = useState("")
	const [open, setOpen] = useState(false)

	const fruits = [
		{ name: "Red Apple", description: "Red apple" },
		{ name: "Green Apple", description: "Green apple" },
		{ name: "Banana" },
	]

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	]

	return (
		<Command.Dialog shortcut={["Meta", "KeyB"]} open={open} onOpenChange={setOpen}>
			<Command
				searchField={
					<Command.Search value={inputValue} onChange={(v) => setInputValue(v.currentTarget.value)} />
				}
			>
				<Command.Group heading="Fruits">
					{fruits.map((fruit, index) => (
						<Command.Item
							key={fruit.name + index}
							before={<IconApple />}
							label={fruit.name}
							description={fruit.description}
						/>
					))}
				</Command.Group>
				<Command.Group heading="Drinks">
					{drinks.map((drink) => (
						<Command.Item
							label={drink.name}
							description={drink.description}
							key={drink.name}
							before={<IconGlass />}
							className={"items-center"}
						/>
					))}
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
`,
  },
  "command/dialog": {
	  component: lazy(() => import("~/examples/command/dialog.tsx")),
	  code: `import { Command } from "@pixelshades/ui/components"
import { IconApple, IconGlass } from "@pixelshades/ui/icons"

export function Example() {
	const fruits = [
		{ name: "Red Apple", description: "Red apple" },
		{ name: "Green Apple", description: "Green apple" },
		{ name: "Banana" },
	]

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	]
	return (
		<Command.Dialog shortcut={["Meta", "KeyJ"]}>
			<Command searchField={<Command.Search />}>
				<Command.Group heading="Fruits">
					{fruits.map((fruit) => (
						<Command.Item
							key={fruit.name}
							before={<IconApple />}
							className={"items-center"}
							textValue={fruit.name}
							label={fruit.name}
							onAction={() => alert(fruit.name)}
							description={fruit.description}
						/>
					))}
				</Command.Group>
				<Command.Group heading="Drinks">
					{drinks.map((drink) => (
						<Command.Item
							key={drink.name}
							before={<IconGlass />}
							className={"items-center"}
							textValue={drink.name}
							label={drink.name}
							onAction={() => alert(drink.name)}
							description={drink.description}
						/>
					))}
				</Command.Group>
			</Command>
		</Command.Dialog>
	)
}
`,
  },
  "command/preview": {
	  component: lazy(() => import("~/examples/command/preview.tsx")),
	  code: `import { Command } from "@pixelshades/ui/components"
import { IconApple, IconGlass } from "@pixelshades/ui/icons"

export function Example() {
	const fruits = [
		{ name: "Red Apple", description: "Red apple" },
		{ name: "Green Apple", description: "Green apple" },
		{ name: "Banana" },
	]

	const drinks = [
		{ name: "Water", description: "A bottle of water." },
		{ name: "Apple juice", description: "A bottle of apple juice." },
	]
	return (
		<Command searchField={<Command.Search />}>
			<Command.Group heading="Fruits">
				{fruits.map((fruit, index) => (
					<Command.Item
						key={fruit.name + index}
						before={<IconApple />}
						onAction={() => alert(fruit.name)}
						textValue={fruit.name}
						className={"items-center"}
						label={fruit.name}
						description={fruit.description}
					/>
				))}
			</Command.Group>
			<Command.Group heading="Drinks">
				{drinks.map((drink) => (
					<Command.Item
						key={drink.name}
						before={<IconGlass />}
						onAction={() => alert(drink.name)}
						label={drink.name}
						description={drink.description}
					/>
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
import { IconBrandGithub } from "@pixelshades/ui/icons"

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
					<IconBrandGithub className="size-3" />
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
  "date-field/before-after": {
	  component: lazy(() => import("~/examples/date-field/before-after.tsx")),
	  code: `import { DateField } from "@pixelshades/ui/components"
import { IconClock } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DateField before={<IconClock />} />
			<DateField after={<IconClock />} />
		</div>
	)
}
`,
  },
  "date-field/controlled": {
	  component: lazy(() => import("~/examples/date-field/controlled.tsx")),
	  code: `"use client"

import { DateField, type DateValue } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState<DateValue>()

	return <DateField value={value} onChange={setValue} />
}
`,
  },
  "date-field/error-message": {
	  component: lazy(() => import("~/examples/date-field/error-message.tsx")),
	  code: `import { DateField } from "@pixelshades/ui/components"

export function Example() {
	return <DateField errorMessage="Invalid Date" isInvalid />
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
  "date-field/hour-cycle": {
	  component: lazy(() => import("~/examples/date-field/hour-cycle.tsx")),
	  code: `import { DateField } from "@pixelshades/ui/components"

export function Example() {
	return <DateField hourCycle={24} />
}
`,
  },
  "date-field/loading": {
	  component: lazy(() => import("~/examples/date-field/loading.tsx")),
	  code: `import { DateField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DateField isLoading />
			<DateField isLoading loaderPosition="before" />
			<DateField isLoading loaderPosition="after" />
		</div>
	)
}
`,
  },
  "date-field/preview": {
	  component: lazy(() => import("~/examples/date-field/preview.tsx")),
	  code: `import { DateField } from "@pixelshades/ui/components"

export function Example() {
	return <DateField />
}
`,
  },
  "date-field/with-label": {
	  component: lazy(() => import("~/examples/date-field/with-label.tsx")),
	  code: `import { DateField } from "@pixelshades/ui/components"

export function Example() {
	return <DateField label="Start Date" description="Description" helperText="Helper Text" />
}
`,
  },
  "date-picker/before-after": {
	  component: lazy(() => import("~/examples/date-picker/before-after.tsx")),
	  code: `import { DatePicker } from "@pixelshades/ui/components"
import { IconClock } from "@pixelshades/ui/icons"

export function Example() {
	return <DatePicker before={<IconClock />} />
}
`,
  },
  "date-picker/controlled": {
	  component: lazy(() => import("~/examples/date-picker/controlled.tsx")),
	  code: `"use client"

import { DatePicker, type DateValue } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState<DateValue>()

	return <DatePicker value={value} onChange={setValue} />
}
`,
  },
  "date-picker/error-message": {
	  component: lazy(() => import("~/examples/date-picker/error-message.tsx")),
	  code: `import { DatePicker } from "@pixelshades/ui/components"

export function Example() {
	return <DatePicker errorMessage="Invalid Date" isInvalid />
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
  "date-picker/hour-cycle": {
	  component: lazy(() => import("~/examples/date-picker/hour-cycle.tsx")),
	  code: `import { DatePicker } from "@pixelshades/ui/components"

export function Example() {
	return <DatePicker hourCycle={24} />
}
`,
  },
  "date-picker/loading": {
	  component: lazy(() => import("~/examples/date-picker/loading.tsx")),
	  code: `import { DatePicker } from "@pixelshades/ui/components"

export function Example() {
	return <DatePicker isLoading />
}
`,
  },
  "date-picker/preview": {
	  component: lazy(() => import("~/examples/date-picker/preview.tsx")),
	  code: `import { DatePicker } from "@pixelshades/ui/components"

export function Example() {
	return <DatePicker />
}
`,
  },
  "date-picker/with-label": {
	  component: lazy(() => import("~/examples/date-picker/with-label.tsx")),
	  code: `import { DatePicker } from "@pixelshades/ui/components"

export function Example() {
	return <DatePicker label="Start Date" description="Description" helperText="Helper Text" />
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
	  code: `import { Button, Dialog, TextField } from "@pixelshades/ui/components"

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
	  code: `import { Button, Dialog, TextField } from "@pixelshades/ui/components"

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
	  code: `"use client"

import { Highlight, TextField, Typography } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [inputValue, setInputValue] = useState("")

	const highlightedChars = inputValue.split("")
	const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

	return (
		<div className="flex flex-col gap-lg">
			<div>
				<TextField label="Search" value={inputValue} onChange={(value) => setInputValue(value)} />
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
  "list-box/preview": {
	  component: lazy(() => import("~/examples/list-box/preview.tsx")),
	  code: `import { ListBox } from "@pixelshades/ui/components"

export function Example() {
	return (
		<ListBox>
			<ListBox.Item>Next.js</ListBox.Item>
			<ListBox.Item>Remix</ListBox.Item>
			<ListBox.Item>Astro</ListBox.Item>
			<ListBox.Item>Gatsby</ListBox.Item>
		</ListBox>
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
import { IconLoader } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner />
			<LoadingSpinner icon={<IconLoader />} />
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
import { IconArrowUp, IconDownload, IconEyeOff, IconMail, IconPin } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div>
			<Menu aria-label="Menu">
				<Button>Open Menu</Button>

				<Menu.Content>
					<Menu.Section aria-label="Actions">
						<Menu.Label>Actions</Menu.Label>
						<Menu.Item aria-label="Reply">
							<IconArrowUp className="size-4 text-subtle-foreground" />
							<span>Reply</span>
							<Menu.Shortcut keys={["option"]}>R</Menu.Shortcut>
						</Menu.Item>
						<Menu.Item aria-label="Pin">
							<IconPin className="size-4 text-subtle-foreground" />
							<span>Pin</span>
							<Menu.Shortcut keys={["option"]}>P</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>

					<Menu.Separator />

					<Menu.Section>
						<Menu.Item aria-label="Save this message">
							<IconDownload className="size-4 text-subtle-foreground" />
							<span>Save this message</span>
							<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Mark as unread">
							<IconEyeOff className="size-4 text-subtle-foreground" />
							<span>Mark as unread</span>
							<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Share via email">
							<IconMail className="size-4 text-subtle-foreground" />
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
import { IconArrowForwardUp, IconDownload, IconEyeOff, IconMail, IconPin } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div>
			<Menu aria-label="Menu">
				<Button>Open Menu</Button>

				<Menu.Content>
					<Menu.Section aria-label="Actions">
						<Menu.Label>Actions</Menu.Label>
						<Menu.Item aria-label="Reply">
							<IconArrowForwardUp className="size-4 text-subtle-foreground" />
							<span>Reply</span>
							<Menu.Shortcut keys={["option"]}>R</Menu.Shortcut>
						</Menu.Item>
						<Menu.Item aria-label="Pin">
							<IconPin className="size-4 text-subtle-foreground" />
							<span>Pin</span>
							<Menu.Shortcut keys={["option"]}>P</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>

					<Menu.Separator />

					<Menu.Section>
						<Menu.Item aria-label="Save this message">
							<IconDownload className="size-4 text-subtle-foreground" />
							<span>Save this message</span>
							<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Mark as unread">
							<IconEyeOff className="size-4 text-subtle-foreground" />
							<span>Mark as unread</span>
							<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
						</Menu.Item>

						<Menu.SubMenu aria-label="Sub Menu">
							<Menu.SubMenuTrigger aria-label="Sub Menu">Sub Menu</Menu.SubMenuTrigger>
							<Menu.Content aria-label="Sub Menu">
								<Menu.Section>
									<Menu.Label>Sub Menu</Menu.Label>
									<Menu.Item aria-label="Save this message">
										<IconDownload className="size-4 text-subtle-foreground" />
										<span>Save this message</span>
										<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
									</Menu.Item>

									<Menu.Item aria-label="Mark as unread">
										<IconEyeOff className="size-4 text-subtle-foreground" />
										<span>Mark as unread</span>
										<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
									</Menu.Item>

									<Menu.Item aria-label="Share via email">
										<IconMail className="size-4 text-subtle-foreground" />
										<span>Share via email</span>
										<Menu.Shortcut keys={["command"]}>U</Menu.Shortcut>
									</Menu.Item>
								</Menu.Section>
							</Menu.Content>
						</Menu.SubMenu>

						<Menu.Item aria-label="Share via email">
							<IconMail className="size-4 text-subtle-foreground" />
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
	  code: `"use client"

import { NumberField } from "@pixelshades/ui/components"
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
	  code: `import { Button, Popover, TextField } from "@pixelshades/ui/components"

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
								<TextField label="Width" id="width" defaultValue="100%" className="col-span-2" />
							</div>
							<div className="grid grid-cols-3 items-center gap-lg">
								<TextField
									label="Max. width"
									id="maxWidth"
									defaultValue="300px"
									className="col-span-2"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-lg">
								<TextField label="Height" id="height" defaultValue="25px" className="col-span-2" />
							</div>
							<div className="grid grid-cols-3 items-center gap-lg">
								<TextField
									label="Max. height"
									id="maxHeight"
									defaultValue="none"
									className="col-span-2"
								/>
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
	  code: `import { RadioGroup } from "@pixelshades/ui/components"

export function Example() {
	return (
		<RadioGroup label="Favorite pet" defaultValue="dog">
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
  "search-field/preview": {
	  component: lazy(() => import("~/examples/search-field/preview.tsx")),
	  code: `import { SearchField } from "../../../../../packages/ui/src/components/ui/search-field"

export function Example() {
	return <SearchField label="Projects" description="Search for a project" helperText="Helper Text" />
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
  "slider/controlled": {
	  component: lazy(() => import("~/examples/slider/controlled.tsx")),
	  code: `"use client"

import { Slider } from "@pixelshades/ui/components"
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
	return (
		<Slider
			label="Slide to change the value"
			description={<small>This is a description!</small>}
			helperText="helper text"
			defaultValue={30}
		/>
	)
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
  "switch/preview": {
	  component: lazy(() => import("~/examples/switch/preview.tsx")),
	  code: `import { Switch } from "@pixelshades/ui/components"

export function Example() {
	return <Switch defaultSelected={true} label="Am I on?" description="This is a description" />
}
`,
  },
  "table/preview": {
	  component: lazy(() => import("~/examples/table/preview.tsx")),
	  code: `import { Table } from "@pixelshades/ui/components"

export function Example() {
	return (
		<Table aria-label="Tokens" onSortChange={(v) => console.log(v)}>
			<Table.Header>
				<Table.Column isRowHeader allowsSorting>
					Name
				</Table.Column>
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
  "tabs/controlled": {
	  component: lazy(() => import("~/examples/tabs/controlled.tsx")),
	  code: `"use client"

import { Tabs, Typography } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState("panel-1")

	return (
		<div className="flex flex-col gap-lg">
			<Typography className="absolute top-0 left-0">
				<span>Selected Key: </span>
				{value}
			</Typography>
			<Tabs variant="pill" selectedKey={value} onSelectionChange={(value) => setValue(value.toString())}>
				<Tabs.List aria-label="Dashbord Panels">
					<Tabs.Tab id="panel-1">Panel 1</Tabs.Tab>
					<Tabs.Tab id="panel-2">Panel 2</Tabs.Tab>
					<Tabs.Tab id="panel-3">Panel 3</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel id="panel-1">Panel 1</Tabs.Panel>
				<Tabs.Panel id="panel-2">Panel 2</Tabs.Panel>
				<Tabs.Panel id="panel-3">Panel 3</Tabs.Panel>
			</Tabs>
		</div>
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
  "tabs/variants": {
	  component: lazy(() => import("~/examples/tabs/variants.tsx")),
	  code: `import { Tabs } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex size-full flex-row flex-wrap items-center justify-center gap-md">
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

			<Tabs variant="line">
				<Tabs.List aria-label="Dashbord Panels">
					<Tabs.Tab id="panel-1">Panel 1</Tabs.Tab>
					<Tabs.Tab id="panel-2">Panel 2</Tabs.Tab>
					<Tabs.Tab id="panel-3">Panel 3</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel id="panel-1">Panel 1</Tabs.Panel>
				<Tabs.Panel id="panel-2">Panel 2</Tabs.Panel>
				<Tabs.Panel id="panel-3">Panel 3</Tabs.Panel>
			</Tabs>
		</div>
	)
}
`,
  },
  "text-field/before-after": {
	  component: lazy(() => import("~/examples/text-field/before-after.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"
import { IconAlertTriangle } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<TextField before={<span>https://</span>} />

			<TextField after={<span>@gmail.com</span>} />

			<TextField before={<IconAlertTriangle className="text-warning" />} />
		</div>
	)
}
`,
  },
  "text-field/controlled": {
	  component: lazy(() => import("~/examples/text-field/controlled.tsx")),
	  code: `"use client"

import { TextField } from "@pixelshades/ui/components"
import { useState } from "react"

export function Example() {
	const [value, setValue] = useState("")

	return <TextField value={value} onChange={setValue} placeholder="Controlled" />
}
`,
  },
  "text-field/disabled": {
	  component: lazy(() => import("~/examples/text-field/disabled.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return <TextField isDisabled />
}
`,
  },
  "text-field/error": {
	  component: lazy(() => import("~/examples/text-field/error.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return <TextField errorMessage="Error Message" isInvalid />
}
`,
  },
  "text-field/loading": {
	  component: lazy(() => import("~/examples/text-field/loading.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<TextField isLoading placeholder="Default" />
			<TextField isLoading loaderPosition="before" placeholder="Before" />
			<TextField isLoading loaderPosition="after" placeholder="After" />
		</div>
	)
}
`,
  },
  "text-field/preview": {
	  component: lazy(() => import("~/examples/text-field/preview.tsx")),
	  code: `import { TextField } from "@pixelshades/ui/components"

export function Example() {
	return <TextField label="Project" description="Deploy your new project in one-click." helperText="Helper Text" />
}
`,
  },
  "time-field/controlled": {
	  component: lazy(() => import("~/examples/time-field/controlled.tsx")),
	  code: `"use client"

import { TimeField, type TimeValue } from "@pixelshades/ui/components"
import { useState } from "react"

import { Time } from "@internationalized/date"

export function Example() {
	const [value, setValue] = useState<TimeValue>(new Time(11, 45))

	return <TimeField label="Start Date" value={value} onChange={setValue} />
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
	return <TimeField label="Start Date" />
}
`,
  },
  "toggle-button/preview": {
	  component: lazy(() => import("~/examples/toggle-button/preview.tsx")),
	  code: `import { ToggleButton } from "@pixelshades/ui/components"
import { IconSailboat } from "@pixelshades/ui/icons"

export function Example() {
	return <ToggleButton before={<IconSailboat />}>Toggle</ToggleButton>
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
  "toggle-button/variants": {
	  component: lazy(() => import("~/examples/toggle-button/variants.tsx")),
	  code: `import { ToggleButton } from "@pixelshades/ui/components"

export function Example() {
	return (
		<div className="flex flex-wrap gap-lg">
			<ToggleButton>Toggle</ToggleButton>
			<ToggleButton variant="subtle">Toggle</ToggleButton>
			<ToggleButton variant="ghost">Toggle</ToggleButton>
		</div>
	)
}
`,
  },
  "tooltip/custom": {
	  component: lazy(() => import("~/examples/tooltip/custom.tsx")),
	  code: `import { Button, Tooltip } from "@pixelshades/ui/components"
import { IconDeviceFloppy } from "@pixelshades/ui/icons"

export function Example() {
	return (
		<Tooltip.Root>
			<Button variant="solid">
				<IconDeviceFloppy />
			</Button>
			<Tooltip.Content>Save</Tooltip.Content>
		</Tooltip.Root>
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
  "tree/preview": {
	  component: lazy(() => import("~/examples/tree/preview.tsx")),
	  code: `import { Tree } from "@pixelshades/ui/components"
import type * as React from "react"

import { Collection } from "react-aria-components"

export function App() {
	const renderItem = (item: FileNode): React.ReactNode => {
		return (
			<Tree.Item key={item.id} textValue={item.title}>
				<Tree.ItemContent>
					{item.children.length > 0 && <Tree.ItemIndicator />}
					<Tree.ItemCheckbox />
					<Tree.ItemLabel>{item.title}</Tree.ItemLabel>
				</Tree.ItemContent>
				{item.children.length > 0 && <Collection items={item.children}>{renderItem}</Collection>}
			</Tree.Item>
		)
	}
	return (
		<Tree className="w-full max-w-xl" aria-label="Files" selectionMode="multiple" items={files}>
			{files.map(renderItem)}
		</Tree>
	)
}

type FileNode = {
	id: number
	title: string
	children: FileNode[]
}

const files: FileNode[] = [
	{
		id: 1,
		title: "Work",
		children: [
			{
				id: 2,
				title: "Reports",
				children: [
					{
						id: 3,
						title: "2023",
						children: [
							{
								id: 4,
								title: "Q1 Report",
								children: [
									{ id: 5, title: "Summary", children: [] },
									{ id: 6, title: "Details", children: [] },
								],
							},
						],
					},
				],
			},
			{
				id: 7,
				title: "Presentations",
				children: [
					{
						id: 8,
						title: "2023 Projects",
						children: [
							{
								id: 9,
								title: "Project A",
								children: [
									{ id: 10, title: "Draft", children: [] },
									{ id: 11, title: "Final", children: [] },
								],
							},
							{
								id: 12,
								title: "Project B",
								children: [{ id: 13, title: "Research", children: [] }],
							},
						],
					},
				],
			},
		],
	},
	{
		id: 14,
		title: "Personal",
		children: [
			{
				id: 15,
				title: "Hobbies",
				children: [
					{
						id: 16,
						title: "Photography",
						children: [
							{ id: 17, title: "Travel", children: [] },
							{ id: 18, title: "Portraits", children: [] },
						],
					},
					{
						id: 19,
						title: "Cooking",
						children: [{ id: 20, title: "Recipes", children: [] }],
					},
				],
			},
		],
	},
	{
		id: 21,
		title: "Projects",
		children: [
			{
				id: 22,
				title: "Web Development",
				children: [
					{
						id: 23,
						title: "Portfolio",
						children: [
							{ id: 24, title: "Images", children: [] },
							{ id: 25, title: "CSS", children: [] },
						],
					},
					{ id: 26, title: "Landing Page", children: [] },
				],
			},
			{
				id: 27,
				title: "Mobile Apps",
				children: [{ id: 28, title: "Weather App", children: [] }],
			},
		],
	},
	{
		id: 29,
		title: "Finance",
		children: [
			{
				id: 30,
				title: "Budget",
				children: [
					{
						id: 31,
						title: "2023",
						children: [
							{ id: 32, title: "January", children: [] },
							{ id: 33, title: "February", children: [] },
						],
					},
				],
			},
		],
	},
	{
		id: 34,
		title: "Health",
		children: [
			{
				id: 35,
				title: "Fitness",
				children: [
					{ id: 36, title: "Workouts", children: [] },
					{ id: 37, title: "Nutrition", children: [] },
				],
			},
			{ id: 38, title: "Wellness", children: [] },
		],
	},
]
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