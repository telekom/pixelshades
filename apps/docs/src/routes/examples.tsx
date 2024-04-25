import {createFileRoute} from "@tanstack/react-router"
import {Badge, Button, Card, Heading, Link, Typography} from "@pixelshades/ui/components";
import {
	CalendarCheck,
	ChevronRight,
	Compass,
	FileInput,
	LineChart,
	MapPinned,
	Menu,
	MessagesSquare,
	MoveRight,
	SquarePen,
	SquarePlus,
	Store,
	UsersRound,
	CircleX,
	Table,
	CircleCheck
} from "@pixelshades/ui/icons"
import React from "react";

export const Route = createFileRoute("/examples")({
	component: Index,
})

function Index() {
	const advantages = [
		{
			icon: <FileInput/>,
			title: "Zugänglichkeit und Effizienz",
			content: "Citykey macht den Zugriff auf städtische Services einfach und effizient. Die Anwendung sichert einen barrierefreien Zugang gemäß Barrierefreiheits- und Digitalisierungsgesetz.",
			button: null,
			highlight: false
		},
		{
			icon: <MessagesSquare/>,
			title: "Direkte Kommunikation",
			content: "Citykey verbessert die Kommunikation mit Bürgern, beschleunigt Abläufe, macht Verwaltungsaktionen transparenter. Um das Vertrauen zu fördern, kann das Design der App an die Stadt angepasst werden.",
			button: null,
			highlight: false
		},
		{
			icon: <Store/>,
			title: "Lokale Vielfalt digital erlebbar machen",
			content: "Citykey bietet lokalen Händlern und Kulturinstitutionen Präsenz auf unserer Plattform. Dies unterstützend die Attraktivität und Besucherfrequenz der Innenstadt.",
			button: null,
			highlight: false
		},
		{
			icon: <UsersRound/>,
			title: "Engagement und Teilhabe steigern",
			content: "Citykey gibt Bürgern die Möglichkeit, sich durch digitale Umfragen und Feedback-Mechanismen aktiv in die Gestaltung und Entscheidungen ihrer Stadt einzubringen.",
			button: null,
			highlight: false
		},
		{
			icon: <LineChart/>,
			title: "Nachhaltige Stadtentwicklung fördern",
			content: "Die Stadt sammelt durch Citykey wichtige Nutzungsdaten städtischer Angebote, die nachhaltige Entwicklung und langfristige Planung unterstützen.",
			button: null,
			highlight: false
		},
		{
			icon: null,
			title: "Sie möchten mehr erfahren?",
			content: "Falls Sie weitere Informationen wünschen, wie Citykey Ihnen helfen kann, zögern Sie nicht, uns zu kontaktieren.",
			button: "Kontakt aufnehmen",
			highlight: true
		}
	]

	const functions = [
		{
			icon: <MapPinned/>,
			title: "Mengelmelder"
		},
		{
			icon: <CalendarCheck/>,
			title: "Abfuhrkalender"
		},
		{
			icon: <SquarePen/>,
			title: "Umfragen"
		},
		{
			icon: <Compass/>,
			title: "Events"
		},
		{
			icon: <FileInput/>,
			title: "Nachrichten"
		},
		{
			icon: <SquarePlus/>,
			title: "und viele mehr ..."
		}
	]

	const packages = [
		{
			badgeText: "Citykey Pionier",
			title: "Steigen Sie in Ihre die digitale Zukunft ein.",
			description: "Ideal für Städte, die erste Schritte in der Digitalisierung unternehmen möchten.",
			features: [
				{
					name: "Digitale Verwaltung",
					active: true
				},
				{
					name: "Bürgernahe Dienste",
					active: true
				},
				{
					name: "Erweiterte Bürgernahe Dienste",
					active: false
				},
				{
					name: "Maßgeschneiderte Funktionen",
					active: false
				},
				{
					name: "Persönlicher Account Manager",
					active: false
				},
				{
					name: "Analyse-Tool",
					active: false
				}
			],
			price: {
				oneTime: 500,
				monthly: 5000
			},
			buttonText: "Als Pionier starten"
		},
		{
			badgeText: "Citykey Visionär",
			title: "Beschleunigewn Sie Ihre Smart City-Entwicklung.",
			description: "Für ambitionierte Kommunen, die ihre Dienste ausbauen und optimieren wollen.",
			features: [
				{
					name: "Digitale Verwaltung",
					active: true
				},
				{
					name: "Bürgernahe Dienste",
					active: true
				},
				{
					name: "Erweiterte Bürgernahe Dienste",
					active: true
				},
				{
					name: "Maßgeschneiderte Funktionen",
					active: true
				},
				{
					name: "Persönlicher Account Manager",
					active: false
				},
				{
					name: "Analyse-Tool",
					active: false
				}
			],
			price: {
				oneTime: 1500,
				monthly: 7500
			},
			buttonText: "Visionär werden"
		},
		{
			badgeText: "City Innovator",
			title: "Definieren Sie die Zukunft der Stadt und Ihrer Bürger.",
			description: "Das ultimative Paket für Vorreiter, die maßgeschneiderte Lösungen und einen persönlichen Service wünschen.",
			features: [
				{
					name: "Digitale Verwaltung",
					active: true
				},
				{
					name: "Bürgernahe Dienste",
					active: true
				},
				{
					name: "Erweiterte Bürgernahe Dienste",
					active: true
				},
				{
					name: "Maßgeschneiderte Funktionen",
					active: true
				},
				{
					name: "Persönlicher Account Manager",
					active: true
				},
				{
					name: "Analyse-Tool",
					active: true
				}
			],
			price: null,
			buttonText: "Innovator werden"
		}
	]

	const sectionMenu = ["Intro", "Vorteile", "Funktionen", "Dienste-Verwaltung", "Weiterentwicklung", "Preise", "Erfolgsgeschichten", "Link zur App"]

	return (
		<div>
			<header className={"w-full"}>
				<nav className="mx-auto max-w-container px-4 lg:px-8 sm:px-6">
					<div className="relative flex items-center py-md">
						<Link className="mr-8 flex-none">
							<span className="sr-only">Citykey</span>
							<img className="h-10 w-10" src="/static/citykey/citykey-key.svg" alt="Logo"/>
						</Link>
						<Button className="-my-1 ml-auto flex h-8 items-center justify-center rounded-lg lg:ml-8"
								before={<MoveRight className="mr-sm"/>}>
							Jetzt Kontakt aufnehmen
						</Button>
						<Button variant={"subtle"} className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
								before={<Menu/>}>
							<span className="sr-only">Open navigation</span>
						</Button>
					</div>

					<div className="relative h-12 max-w-screen-xl">
						<ol className="absolute top-0 right-0 bottom-0 left-0 flex gap-layout-sm overflow-x-scroll">
							{sectionMenu.map((section, index) => (
								<li key={index} className="relative w-3/5 shrink-0 grow-0 uppercase">
									<Button className="absolute top-1 left-0 w-full snap-center"
											variant={"subtle"}
											before={<ChevronRight/>}>{section}</Button>
								</li>
							))}
						</ol>
					</div>
				</nav>
			</header>

			{/*<header className="sticky top-0 overflow-hidden bg-white">
				<div className="flex justify-between px-layout-xl py-layout-md">
					<nav className="flex items-center gap-layout-md">
						<Link className="mr-8"><img src="/static/citykey/Logo%20Citykey.svg" alt="Logo"/></Link>
						<Link variant="active">Startseite</Link>
						<Link>Alle Functionen</Link>
						<Link>FAQ</Link>
					</nav>

					<div className="flex items-center gap-layout-md">
						<Select>
							<Select.Item>Heller Modus</Select.Item>
							<Select.Item>Dunkler Modus</Select.Item>
							<Select.Item>Kontrast Modus</Select.Item>
						</Select>

						<Button before={<MoveRight className="mr-md"/>}>
							Jetzt Kontakt aufnehmen
						</Button>
					</div>
				</div>

				<nav className="flex items-center gap-layout-md border-b border-b-primary bg-primary-foreground px-layout-xl py-layout-md py-layout-sm">
					<Button className="uppercase" variant={"subtle"} before={<ChevronRight/>}>Intro</Button>
					<Button className="uppercase" variant={"subtle"} before={<ChevronRight/>}>Vorteile</Button>
					<Button className="uppercase" variant={"subtle"} before={<ChevronRight/>}>Functionen</Button>
					<Button className="uppercase" variant={"subtle"}
							before={<ChevronRight/>}>Dienste-Verwaltung</Button>
					<Button className="uppercase" variant={"subtle"}
							before={<ChevronRight/>}>Weiterentwicklung</Button>
					<Button className="uppercase" variant={"subtle"} before={<ChevronRight/>}>Preise</Button>
					<Button className="uppercase" variant={"subtle"}
							before={<ChevronRight/>}>Erfolgsgeschichten</Button>
					<Button className="uppercase" variant={"subtle"} before={<ChevronRight/>}>Link zur App</Button>
				</nav>
			</header>*/}

			<section className="bg-white dark:bg-gray-900">
				<div
					className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-layout-md xl:gap-0 lg:py-16">
					<div className="mr-auto flex flex-col gap-layout-sm place-self-center lg:col-span-7">
						<div><Badge>Intro</Badge></div>
						<Heading>Gemeinsam die Stadt von morgen gestalten</Heading>
						<Typography size="md">citykey verbindet Städte, Bürger und lokale Unternehmen für eine lebendige
							Gemeinschaft und eine smarte Zukunft.</Typography>
						<div className="mt-layout-md flex flex-col gap-layout-sm lg:flex-row">
							<Button before={<MoveRight className="mr-md"/>}>Alle Funktionen</Button>
							<Button before={<MoveRight className="mr-md"/>}>Jetzt kostenlos testen</Button>
						</div>

					</div>
					<div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
						<img src="/static/citykey/image_intro.png"
							 alt="image_intro"/>
					</div>
				</div>
			</section>

			<section className="bg-primary-foreground">
				<div className="mx-auto max-w-screen-xl px-4 py-8">
					<div
						className="flex flex-col gap-layout-sm text-center">
						<div><Badge>Vorteile</Badge></div>

						<Heading level={2}>Entdecken Sie Citykey - Ihr Wegweiser in einer smarten Zukunft.</Heading>
						<Typography size="md">
							Diese App verbindet Bürger, Verwaltung und Dienste für ein einfacheres, effizienteres und
							inklusiveres städtisches Leben. Mit der Einhaltung releventer deutscher Gesetze garantiert
							Citykey eine zugängliche und transpertrente Stadtgestalltung.
						</Typography>

						<Typography size="md">
							Lassen Sie sich von den Möglichkeiten begeistern.
						</Typography>
					</div>
				</div>
				<div className="mx-auto max-w-screen-xl px-4 py-8">
					<div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2">
						{advantages.map((advantage, index) => (
							<Card key={index}
								  className={`${advantage.highlight ? "bg-primary text-primary-foreground" : ""}`}>
								<Card.Header>
									{!advantage.button &&
										<Card.Description>{advantage.icon}</Card.Description>
									}
									{advantage.title &&
										<Card.Title>{advantage.title}</Card.Title>
									}
								</Card.Header>
								<Card.Content>
									<Typography size="md">{advantage.content}</Typography>
								</Card.Content>
								{advantage.button &&
									<Card.Footer className="border-0 bg-primary">
										<Button
											className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
											before={<MoveRight
												className="mr-md text-primary"/>}>{advantage.button}</Button>
									</Card.Footer>
								}
							</Card>
						))}
					</div>
				</div>
			</section>
			<section className="bg-white dark:bg-gray-900">
				<div className="mx-auto flex max-w-screen-xl flex-col gap-layout-xl px-4 py-8 lg:flex-row">
					<div className="grid flex-none grid-cols-2 gap-4 place-self-center md:grid-cols-3">
						{functions.map((fun, index) => (
							<Card key={index}>
								<Card.Header className="flex items-center justify-center">
									<Card.Description>{fun.icon}</Card.Description>
									<Card.Title>{fun.title}</Card.Title>
								</Card.Header>
							</Card>
						))}
					</div>
					<div className="order-first lg:order-last" >
						<div
							className="flex flex-col gap-layout-sm">
							<div><Badge>Funktionen</Badge></div>

							<Heading level={2}>Über 42 Funktionen: Gestalten Sie mit Citykey die Stadt der
								Zukunft.</Heading>
							<Typography size="md">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolor id incidunt
								inventore odio perferendis qui quidem sit! A animi consectetur ducimus eveniet ex
								exercitationem facilis harum magni quibusdam sequi!
							</Typography>
							<Typography size="md">
								Aliquid asperiores debitis dicta ex exercitationem, fuga fugiat impedit in itaque iure
								laudantium libero maxime natus odio possimus qui rem reprehenderit sed.
							</Typography>
							<div>
								<Button before={<MoveRight className="mr-md"/>}>Alle Funktionen entdecken!</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white dark:bg-gray-900">
				<div
					className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-layout-md lg:py-16">
					<div className="mr-auto flex flex-col gap-layout-sm place-self-center lg:col-span-7">
						<div><Badge>Dienste-Verwaltung</Badge></div>
						<Heading level={2}>Effiziente Verwaltung mit dem Citykey Customer Service Portal</Heading>
						<Typography size="md">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ea labore nihil
							obcaecati odit, quod veritatis voluptas? Architecto assumenda dolorem praesentium
							repellendus similique. Assumenda, culpa perspiciatis quidem repellendus sit vero. Ad aperiam
							fugit laudantium quaerat recusandae tenetur? Commodi cum eligendi est minima pariatur
							quisquam rem ullam velit voluptatem. Delectus, sapiente.
						</Typography>
					</div>
					<div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
						<img src="/static/citykey/image_dienste.png"
							 alt="image_dienste"/>
					</div>
				</div>
			</section>
			<section className="bg-white dark:bg-gray-900">
				<div
					className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-layout-md lg:py-16">
					<div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
						<img src="/static/citykey/image_weiterentwicklung.png"
							 alt="image_weiterentwicklung"/>
					</div>
					<div className="ml-auto flex flex-col gap-layout-sm place-self-center lg:col-span-7">
						<div><Badge>Weiterentwicklung</Badge></div>
						<Heading level={2}>Zukunftssicher mit T-Systems: Innovativ durch die digitale
							Transformation</Heading>
						<Typography size="md">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ea labore nihil
							obcaecati odit, quod veritatis voluptas? Architecto assumenda dolorem praesentium
							repellendus similique. Assumenda, culpa perspiciatis quidem repellendus sit vero. Ad aperiam
							fugit laudantium quaerat recusandae tenetur? Commodi cum eligendi est minima pariatur
							quisquam rem ullam velit voluptatem. Delectus, sapiente.
						</Typography>
					</div>
				</div>
			</section>
			<section className="bg-white dark:bg-gray-900">
				<div className="mx-auto max-w-screen-xl space-y-xl px-4 py-8">
					<div className="flex flex-col items-center gap-layout-md">
						<div><Badge>Preise</Badge></div>
						<Heading level={2}>Flexible Parkete für Ihre Smart City-Reise</Heading>
						<Typography size="md" className="text-center">
							Egal, ob Sie Citykey zunächst unverbindlich testen möchten oder bereit sind, die digitale
							Transformation Ihrer Stadt vollständig zu umarmen – wir haben das richtige Paket für Sie.
							Wählen
							Sie aus unseren flexiblen Angeboten und starten Sie die Reise in Ihre Smart City.
						</Typography>
					</div>
					<div
						className="flex flex-col items-center gap-layout-md rounded-md border-2 border-primary bg-primary-foreground px-4 py-8">
						<Heading level={3}>Erkunde Citykey 6 Monate lang kostenfrei als "Citykey Pioneer".</Heading>
						<Typography size="md" className="text-center">
							Erlebe selbst, wie Citykey Deine Stadtverwaltung und das Bürgererlebnis transformieren kann.
							Keine Kreditkarte erforderlich, keine automatische Verlängerung. Starte jetzt und werde Teil
							der digitalen Revolution in Deiner Stadt.
						</Typography>
						<div>
							<Button before={<MoveRight className="mr-md"/>}>Jetzt kostenlos & unverbindlich
								testen</Button>
						</div>
					</div>
					<div className="flex flex-col gap-layout-sm lg:flex-row">
						{packages.map((pkg, index) => (
							<Card key={index} className="flex-1 align-item">
								<Card.Header>
									<div><Badge>{pkg.badgeText}</Badge></div>
									<Card.Title>{pkg.title}</Card.Title>
									<Card.Description>
										{pkg.description}
									</Card.Description>
								</Card.Header>
								<Card.Content>
									{pkg.features.map((feature, index) => (
										<div key={index} className="flex">
											{feature.active ? <CircleCheck className="mr-md text-green-500"/> :
												<CircleX className="mr-md text-gray-500"/>}
											<Typography size="md">{feature.name}</Typography>
										</div>
									))}

									<Typography size="md" className="font-bold">Kosten</Typography>

									{pkg.price ?
										(
											<>
												<Typography
													size="md">Einmalig: {pkg.price.oneTime.toFixed(2)} €</Typography>
												<Typography
													size="md">Monatlich: {pkg.price.monthly.toFixed(2)} €</Typography>
											</>
										)
										: (<Typography size="md">Auf Abfrage</Typography>)
									}
								</Card.Content>
								<Card.Footer className="border-none bg-inherit">
									<Button className="w-full" before={<MoveRight className="mr-md"/>}>
										{pkg.buttonText}
									</Button>
								</Card.Footer>
							</Card>
						))}
					</div>
					<div
						className="flex justify-center">
						<Button variant="outline" before={<Table className="mr-md"/>}>
							Unsere Pakete im Detail vergleichen
						</Button>
					</div>
				</div>
			</section>

			<section className="bg-white dark:bg-gray-900">
				<div className="mx-auto max-w-screen-xl space-y-xl px-4 py-8">
					<div className="flex flex-col gap-layout-md lg:flex-row">
						<div className="mr-auto flex flex-col gap-layout-sm place-self-center lg:col-span-6">
							<div><Badge>Erfolgsgeschichten</Badge></div>
							<Heading level={2}>Inspirierende Samrt City Transformationen</Heading>
							<Typography size="md">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ea labore nihil
								obcaecati odit, quod veritatis voluptas? Architecto assumenda dolorem praesentium
								repellendus similique. Assumenda, culpa perspiciatis quidem repellendus sit vero. Ad
								aperiam
								fugit laudantium quaerat recusandae tenetur? Commodi cum eligendi est minima pariatur
								quisquam rem ullam velit voluptatem. Delectus, sapiente.
							</Typography>
						</div>
						<div className="lg:col-span-6 lg:mt-0 lg:flex">
							<Card className="justify-center border-dashed">
								<Card.Content>
									<div className="flex gap-x-xl">
										<img className="h-24 w-24"
											 src="https://www.paderborn.de/WEB-IES/paderborn-module/2.34.0/images/logo/paderborn-l.png"
											 alt="paderborn"/>

										<blockquote cite="https://www.huxley.net/bnw/four.html">
											<Typography size="md">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
												aliquam, autem consequatur cumque dolore eaque eos laudantium libero
												odio
												officia officiis, quae quam quidem ratione repudiandae sint, vitae! Cum,
												qui!
											</Typography>
											<footer className="text-primary/50">— Stadt Paderborn</footer>
										</blockquote>
									</div>

								</Card.Content>
							</Card>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-screen-xl space-y-xl px-4 py-8">
					<div className="flex flex-col items-center gap-layout-md">
						<div><Badge>Link zur App</Badge></div>
						<Heading level={2}>Test Sie die Citykey App auf Andriod oder iOs</Heading>
					</div>
					<div className="flex flex-col items-center justify-center gap-layout-sm lg:flex-row">
						<Card className="w-4/5 items-center justify-center lg:w-1/5">
							<Card.Header className="items-center justify-center">
								<img className="h-24 w-24" src="/static/citykey/play-store.png" alt="play-store"/>
								<Card.Title>
									Play Store
								</Card.Title>
								<Card.Description>
									Android
								</Card.Description>
							</Card.Header>
							<Card.Footer className="border-none bg-inherit">
								<Button variant={"outline"}>
									Zum Play Store
								</Button>
							</Card.Footer>
						</Card>

						<Card className="w-4/5 items-center justify-center lg:w-1/5">
							<Card.Header className="items-center justify-center">
								<img className="h-24 w-24" src="/static/citykey/app-store.png" alt="app-store"/>
								<Card.Title>
									App Store
								</Card.Title>
								<Card.Description>
									iOs
								</Card.Description>
							</Card.Header>
							<Card.Footer className="border-none bg-inherit">
								<Button variant={"outline"}>
									Zum App Store
								</Button>
							</Card.Footer>
						</Card>

						<Card className="w-4/5 items-center justify-center lg:w-1/5">
							<Card.Content className="items-center justify-center">
								<img className="h-24 w-24" src="/static/citykey/qr-code.png" alt="qr-code"/>
								<Typography>Oder per QR-Scan mit dem Smartphone</Typography>
							</Card.Content>
						</Card>
					</div>
				</div>
			</section>
			<footer className="flex flex-col justify-between gap-layout-md bg-primary p-layout-xl text-primary-foreground lg:flex-row">
				<div>
					<Typography size={"md"}>&copy; Deutsche Telekom GmbH</Typography>
				</div>
				<div className="flex flex-col lg:flex-row lg:gap-layout-md">
					<Link className="text-primary-foreground">Impressum</Link>
					<Link className="text-primary-foreground">Datenschutz</Link>
					<Link className="text-primary-foreground">Haftungsausschluss</Link>
				</div>
			</footer>
		</div>
	)
}
