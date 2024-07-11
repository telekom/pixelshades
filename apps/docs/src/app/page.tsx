import { Button, Link } from "@pixelshades/ui/components"
import Image from "next/image"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="w-full pt-12 lg:pt-32 md:pt-24">
				<div className="mx-auto grid max-w-[1300px] gap-4 px-4 md:grid-cols-2 md:gap-16 md:px-10 sm:px-6">
					<div>
						<h1 className="font-bold text-3xl tracking-tighter 2xl:text-[3.75rem] md:text-5xl sm:text-4xl xl:text-[3.4rem] lg:leading-tighter">
							Pixelshades
						</h1>
						<p className="mx-auto max-w-[700px] text-subtle-foreground md:text-xl">
							Beatifully designed components ready to be used in your app. Accessible. Customizable.
						</p>
						<div className="mt-6 space-x-4">
							<Link href="/docs">
								<Button>View Documentation</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
