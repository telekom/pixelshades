import { Button, Menu } from "@pixelshades/ui/components";
import { DownloadIcon, EyeOffIcon, MailIcon, PinIcon, RedoIcon } from "@pixelshades/ui/icons";

export default function Example() {
	return (
		<div>
			<Menu aria-label="Menu">
				<Button>Open Menu</Button>

				<Menu.Content>
					<Menu.Section aria-label="Actions">
						<Menu.Label>Actions</Menu.Label>
						<Menu.Item aria-label="Reply">
							<RedoIcon className="size-4 text-subtle-foreground" />
							<span>Reply</span>
							<Menu.Shortcut keys={["option"]}>R</Menu.Shortcut>
						</Menu.Item>
						<Menu.Item aria-label="Pin">
							<PinIcon className="size-4 text-subtle-foreground" />
							<span>Pin</span>
							<Menu.Shortcut keys={["option"]}>P</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>

					<Menu.Separator />

					<Menu.Section>
						<Menu.Item aria-label="Save this message">
							<DownloadIcon className="size-4 text-subtle-foreground" />
							<span>Save this message</span>
							<Menu.Shortcut keys={["command"]}>S</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Mark as unread">
							<EyeOffIcon className="size-4 text-subtle-foreground" />
							<span>Mark as unread</span>
							<Menu.Shortcut keys={["command", "option"]}>U</Menu.Shortcut>
						</Menu.Item>

						<Menu.Item aria-label="Share via email">
							<MailIcon className="size-4 text-subtle-foreground" />
							<span>Share via email</span>
							<Menu.Shortcut keys={["command"]}>U</Menu.Shortcut>
						</Menu.Item>
					</Menu.Section>
				</Menu.Content>
			</Menu>
		</div>
	);
}
