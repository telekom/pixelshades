import { Button, ButtonGroup, Heading } from "@pixelshades/ui/components"

export default function Example() {
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
