import { Avatar, Menu } from "@pixelshades/ui/components"
import {
	IconBrandGithub,
	IconCloud,
	IconCreditCard,
	IconKeyboard,
	IconLifebuoy,
	IconLogout,
	IconSettings,
	IconUser,
	IconUsers,
} from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Menu>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				button
			/>
			<Menu.Content className="w-56">
				<Menu.Section>
					<Menu.Label>My Account</Menu.Label>
					<Menu.Item>
						<IconUser className="mr-2 h-4 w-4" />
						<span>Profile</span>
						<Menu.Shortcut>⇧⌘P</Menu.Shortcut>
					</Menu.Item>
					<Menu.Item>
						<IconCreditCard className="mr-2 h-4 w-4" />
						<span>Billing</span>
						<Menu.Shortcut>⌘B</Menu.Shortcut>
					</Menu.Item>
					<Menu.Item>
						<IconSettings className="mr-2 h-4 w-4" />
						<span>Settings</span>
						<Menu.Shortcut>⌘S</Menu.Shortcut>
					</Menu.Item>
					<Menu.Item>
						<IconKeyboard className="mr-2 h-4 w-4" />
						<span>Keyboard shortcuts</span>
						<Menu.Shortcut>⌘K</Menu.Shortcut>
					</Menu.Item>
				</Menu.Section>

				<Menu.Separator />
				<Menu.Item>
					<IconBrandGithub className="mr-2 h-4 w-4" />
					<span>GitHub</span>
				</Menu.Item>
				<Menu.Item>
					<IconLifebuoy className="mr-2 h-4 w-4" />
					<span>Support</span>
				</Menu.Item>
				<Menu.Item>
					<IconCloud className="mr-2 h-4 w-4" />
					<span>API</span>
				</Menu.Item>
				<Menu.Separator />
				<Menu.Item>
					<IconLogout className="mr-2 h-4 w-4" />
					<span>Log out</span>
					<Menu.Shortcut>⇧⌘Q</Menu.Shortcut>
				</Menu.Item>
			</Menu.Content>
		</Menu>
	)
}
