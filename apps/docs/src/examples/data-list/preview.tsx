import { DataList, Link } from "@pixelshades/ui/components"
import { GithubIcon } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<DataList>
			<DataList.Item
				orientation={{
					xs: "vertical",
					sm: "vertical",
					md: "horizontal",
					lg: "horizontal",
					xl: "horizontal",
					"2xl": "horizontal",
					"3xl": "horizontal",
				}}
			>
				<DataList.Label>Import</DataList.Label>
				<DataList.Value>
					<code>
						import {"{ "}
						Button
						{" }"} from "@pixelshades/ui/components"
					</code>
				</DataList.Value>
			</DataList.Item>
			<DataList.Item>
				<DataList.Label>Source</DataList.Label>
				<DataList.Value>
					<GithubIcon className="size-3" />
					<Link
						className="text-foreground"
						href={"https://github.com/telekom/pixelshades/tree/main/packages/ui/src/components/ui/button"}
					>
						View Source Code
					</Link>
				</DataList.Value>
			</DataList.Item>
			<DataList.Item>
				<DataList.Label>Owner</DataList.Label>
				<DataList.Value>Michael Jackson</DataList.Value>
			</DataList.Item>
		</DataList>
	)
}
