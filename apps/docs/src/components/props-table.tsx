import {
	Heading,
	If,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Typography,
} from "@dv/ui/components"
import props from "~/lib/props.json"

export type PropsTableProps = {
	slug: string
}

const getComponentPropsBySlug = (slug: string) => {
	const matchKey = Object.keys(props).find((key) => key.includes(slug.toLowerCase()))

	if (!matchKey) {
		return null
	}

	return props[matchKey as "src/components/ui/breadcrumbs/breadcrumbs.tsx"]
}

export const PropsTable = ({ slug }: PropsTableProps) => {
	const props = getComponentPropsBySlug(slug)

	if (!props) {
		return "No Props Yet"
	}

	return (
		<div className="flex h-full w-full flex-col gap-md">
			{props.map((prop) => (
				<div className="space-y-layout-sm" key={prop.description}>
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
					<Table className="w-full" aria-label={prop.displayName}>
						<TableHeader>
							<TableColumn isRowHeader>Name</TableColumn>
							<TableColumn>Type</TableColumn>
							<TableColumn>Description</TableColumn>
						</TableHeader>
						<TableBody>
							<If condition={prop.props}>
								{(data) => {
									return Object.entries(data).map(([key, value]) => (
										<TableRow key={key}>
											<TableCell>
												{key}
												<If condition={value.required}>
													<span className="text-destructive">*</span>
												</If>
											</TableCell>
											<TableCell>{value.tsType?.raw}</TableCell>
											<TableCell>{value.description}</TableCell>
										</TableRow>
									))
								}}
							</If>
						</TableBody>
					</Table>
				</div>
			))}
		</div>
	)
}
