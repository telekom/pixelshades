import { ProgressBar } from "@pixelshades/ui/components";

export default function Example() {
	return (
		<div className="gap-lg·flex·flex-col·w-full">
			<ProgressBar size="xs" label="XS" description={<small>This is a description!</small>} value={25} />
			<ProgressBar size="sm" label="SM" description={<small>This is a description!</small>} value={45} />
			<ProgressBar size="md" label="MD" description={<small>This is a description!</small>} value={65} />
			<ProgressBar size="lg" label="LG" description={<small>This is a description!</small>} value={85} />
		</div>
	);
}
