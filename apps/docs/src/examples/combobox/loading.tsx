import { ComboBox } from "@pixelshades/ui/components"

import { useAsyncList } from "react-stately"

export default function Example() {
	const list = useAsyncList<any>({
		async load({ signal }) {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon", { signal })
			const json = await res.json()
			return { items: json.results }
		},
	})

	return (
		<ComboBox label="Project" items={list.items} isLoading={list.isLoading}>
			{(item) => <ComboBox.Item id={item.name}>{item.name}</ComboBox.Item>}
		</ComboBox>
	)
}
