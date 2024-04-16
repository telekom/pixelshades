import { Heading, HeadingLevel } from "@dv/ui/components"

export default function Example() {
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
