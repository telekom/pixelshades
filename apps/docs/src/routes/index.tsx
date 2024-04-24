import { cn } from "@pixelshades/utils/styles";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button, Heading, Typography } from "@pixelshades/ui/components";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main className={cn("flex min-h-screen flex-col items-center justify-between p-24")}>
			<section className="w-full py-12 lg:py-32 md:py-24 xl:py-48">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="space-y-2">
							<Heading
								level={1}
								className="font-bold text-3xl tracking-tighter lg:text-6xl/none md:text-5xl sm:text-4xl"
							>
								Pixelshades
							</Heading>
							<Typography className="mx-auto max-w-[700px] text-subtle-foreground text-xl">
								Beautfiully designed components ready to be used in your app. Accessible. Customizable.
								Open Source.
							</Typography>
						</div>
						<div className="space-x-4">
							<Link to="/docs">
								<Button>Get Started</Button>
							</Link>
							<Link to="/docs">
								<Button variant="outline">Learn more</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
