import { Heading, HeadingLevel, Typography } from "@pixelshades/ui/components"

export default function Example() {
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
