import { Table } from "@pixelshades/ui/components";

export default function Example() {
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
	);
}
