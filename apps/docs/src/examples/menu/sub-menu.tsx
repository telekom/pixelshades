import { Button, Menu } from "@pixelshades/ui/components"
import { IconArrowForwardUp, IconDownload, IconEyeOff, IconMail, IconPin } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div>
			<Menu aria-label="Menu">
				<Button>Open Menu</Button>

				<Menu.Content>
					<Menu.Section aria-label="Actions">
						<Menu.Label>Actions</Menu.Label>
						<Menu.Item aria-label="Reply">
							<IconArrowForwardUp className="size-4 text-subtle-foreground" />
							<span>Reply</span>
							<Menu.Shortcut keys={["option"]}>R</Menu.Shortcut>
						</Menu.Item>
						<Menu.Item aria-label="Pin">
							<IconPin className="size-4 text-subtle-foreground" />
							<span>Pin</span>
							<Menu.Shortcut keys={["option"]}>P</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>

					<Menu.Separator />

					<Menu.Section>
						<Menu.Item aria-label="Save this message">
							<IconDownload className="size-4 text-subtle-foreground" />
							<span>Save this message</span>
							<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Mark as unread">
							<IconEyeOff className="size-4 text-subtle-foreground" />
							<span>Mark as unread</span>
							<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
						</Menu.Item>

						<Menu.SubMenu aria-label="Sub Menu">
							<Menu.SubMenuTrigger aria-label="Sub Menu">Sub Menu</Menu.SubMenuTrigger>
							<Menu.Content aria-label="Sub Menu">
								<Menu.Section>
									<Menu.Label>Sub Menu</Menu.Label>
									<Menu.Item aria-label="Save this message">
										<IconDownload className="size-4 text-subtle-foreground" />
										<span>Save this message</span>
										<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
									</Menu.Item>

									<Menu.Item aria-label="Mark as unread">
										<IconEyeOff className="size-4 text-subtle-foreground" />
										<span>Mark as unread</span>
										<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
									</Menu.Item>

									<Menu.Item aria-label="Share via email">
										<IconMail className="size-4 text-subtle-foreground" />
										<span>Share via email</span>
										<Menu.Shortcut keys={["command"]}>U</Menu.Shortcut>
									</Menu.Item>
								</Menu.Section>
							</Menu.Content>
						</Menu.SubMenu>

						<Menu.Item aria-label="Share via email">
							<IconMail className="size-4 text-subtle-foreground" />
							<span>Share via email</span>
							<Menu.Shortcut keys={["command"]}>U</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>
				</Menu.Content>
			</Menu>
		</div>
	)
}
