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

const getComponentDocBySlug = (slug: string) => {
	const item = props.find((comp) => getComponentName(comp.filePath) === slug.toLowerCase())

	if (!item) {
		return null
	}

	return item
}

export const PropsTable = ({ slug }: PropsTableProps) => {
	const doc = getComponentDocBySlug(slug)

	if (!doc) {
		return "No Props Yet"
	}

	return (
		<div className="flex h-full w-full flex-col gap-md">
			<div className="w-full space-y-layout-sm" key={doc.description}>
				<Typography className="text-xl">
					{doc.displayName.includes("Unstyled") ? doc.displayName.replace("Unstyled", "") : doc.displayName}{" "}
					Component Props
					{/* <If condition={doc.}>
						{(data) => {
							return (
								<span>
									{" "}
									extends <span className="font-bold text-primary"> {data.toString()}</span>
								</span>
							)
						}}
					</If> */}
				</Typography>
				<Table className="w-full bg-subtle/10" aria-label={doc.displayName}>
					<Table.Header>
						<Table.Column isRowHeader>Name</Table.Column>
						<Table.Column>Type</Table.Column>
						<Table.Column>Description</Table.Column>
					</Table.Header>
					<Table.Body>
						<If condition={doc.props}>
							{(data) => {
								return Object.entries(data).map(([key, value]) => (
									<Table.Row key={key}>
										<Table.Cell>
											{value.name}
											<If condition={value.required}>
												<span className="text-destructive">*</span>
											</If>
										</Table.Cell>
										<Table.Cell>{value.type.name}</Table.Cell>
										<Table.Cell>{value.description}</Table.Cell>
										{/* <Table.Cell>{value.parent}</Table.Cell> */}
									</Table.Row>
								))
							}}
						</If>
					</Table.Body>
				</Table>
			</div>
		</div>
	)
}
