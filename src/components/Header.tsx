import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import brandLogo from "@/assets/brand-logo.png";
import ModeToggle from "@/components/mode-toggle";
import navigationLinks from "@/components/navigation-links";

type HeaderProps = {
    name: string;
}

const Header = ({ name } : HeaderProps) => {
    return (
        <header className="flex h-16 px-5 xl:px-50 items-center justify-between border-1 border-solid">
            <div className="flex gap-5 items-center">
                <Avatar>
                    <AvatarImage src={brandLogo} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-sm hidden md:flex md:text-lg font-bold">
                    {name}
                </h1>
            </div>
            <div className="flex gap-3 md:gap-5 items-center">
                <nav className="hidden md:flex" aria-label="Main Navigation">
                    <ul className="flex gap-10">
                        {navigationLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <NavigationMenu className="md:hidden">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>☰</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                {navigationLinks.map((link) => (
                                    <NavigationMenuLink key={link.label}>{link.label}</NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Button variant="default" className="text-white">Get in Touch</Button>
                <ModeToggle />
            </div>
        </header>
    );
};

export default Header;