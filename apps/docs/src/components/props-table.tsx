import { If, Table, Typography } from "@pixelshades/ui/components"
import props from "~/lib/props.json"

export type PropsTableProps = {
	slug: string
}
function getComponentName(path: string): string {
	const lastSlashIndex = path.lastIndexOf("/")
	const extensionIndex = path.lastIndexOf(".tsx")
	if (lastSlashIndex === -1 || extensionIndex === -1 || lastSlashIndex >= extensionIndex) {
		throw new Error("Invalid path format")
	}
	return path.substring(lastSlashIndex + 1, extensionIndex)
}

const getComponentPropsBySlug = (slug: string) => {
	const matchKey = Object.keys(props).find((key) => getComponentName(key) === slug.toLowerCase())

	if (!matchKey) {
		return null
	}

	return props[matchKey as "src/components/ui/breadcrumbs/breadcrumbs.tsx"]
}

export const PropsTable = ({ slug }: PropsTableProps) => {
	const props = getComponentPropsBySlug(slug)
	console.log("props", props)
	if (!props) {
		return "No Props Yet"
	}

	return (
		<div className="flex h-full w-full flex-col gap-md">
			{props.map((prop) => (
				<div className="w-full space-y-layout-sm" key={prop.description}>
					<Typography className="text-xl">
						{prop.displayName.includes("Unstyled")
							? prop.displayName.replace("Unstyled", "")
							: prop.displayName}{" "}
						Component Props
						<If condition={prop.composes}>
							{(data) => {
								return (
									<span>
										{" "}
										extends <span className="font-bold text-primary"> {data.toString()}</span>
									</span>
								)
							}}
						</If>
					</Typography>
					<Table className="w-full bg-subtle/10" aria-label={prop.displayName}>
						<Table.Header>
							<Table.Column isRowHeader>Name</Table.Column>
							<Table.Column>Type</Table.Column>
							<Table.Column>Description</Table.Column>
						</Table.Header>
						<Table.Body>
							<If condition={prop.props}>
								{(data) => {
									return Object.entries(data).map(([key, value]) => (
										<Table.Row key={key}>
											<Table.Cell>
												{key}
												<If condition={value.required}>
													<span className="text-destructive">*</span>
												</If>
											</Table.Cell>
											<Table.Cell>{value.tsType?.raw}</Table.Cell>
											<Table.Cell>{value.description}</Table.Cell>
										</Table.Row>
									))
								}}
							</If>
						</Table.Body>
					</Table>
				</div>
			))}
		</div>
	)
}
