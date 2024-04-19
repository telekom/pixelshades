import { DataList, DataListItem, DataListLabel, DataListValue, Link } from "@pixelshades/ui/components"
import { GithubIcon } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<DataList>
			<DataListItem>
				<DataListLabel>Import</DataListLabel>
				<DataListValue>
					<code>
						import {"{ "}
						Button
						{" }"} from "@pixelshades/ui/components"
					</code>
				</DataListValue>
			</DataListItem>
			<DataListItem>
				<DataListLabel>Source</DataListLabel>
				<DataListValue>
					<GithubIcon className="size-3" />
					<Link
						className="text-foreground"
						href={"https://github.com/telekom/pixelshades/tree/main/packages/ui/src/components/ui/button"}
					>
						View Source Code
					</Link>
				</DataListValue>
			</DataListItem>
			<DataListItem>
				<DataListLabel>Owner</DataListLabel>
				<DataListValue>Michael Jackson</DataListValue>
			</DataListItem>
		</DataList>
	)
}
