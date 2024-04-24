import { LoadingSpinner } from "@pixelshades/ui/components";
import { Loader } from "@pixelshades/ui/icons";

export default function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner />
			<LoadingSpinner icon={<Loader />} />
		</div>
	);
}
