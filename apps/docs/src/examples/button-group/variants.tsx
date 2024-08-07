import { Button, ButtonGroup } from "@pixelshades/ui/components"

export default function Example() {
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
