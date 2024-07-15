import { Button, ButtonGroup } from "@pixelshades/ui/components"

export default function Example() {
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
