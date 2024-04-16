import {
	type Select,
	SelectItem,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@dv/ui/components"

export default function Example() {
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
