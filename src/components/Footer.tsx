import navigationLinks from "@/components/navigation-links";
import { Separator } from "@/components/ui/separator";
import LinkedIn from "@/components/icons/linkedIn";
import GitHub from "@/components/icons/gitHub";

type FooterProps = {
    name: string;
}

const Footer = ({name} : FooterProps) => {
    return (
        <footer className="flex flex-col">
            <div className="flex flex-col items-center justify-center py-20 px-5 xl:px-50 gap-5 text-center">
                <h1 className="text-lg">{name}</h1>
                <h2>Frontend Developer crafting responsive, accessible, and visually engaging websites.</h2>
                <nav>
                    <ul className="flex gap-5">
                        <LinkedIn linkedInLink="https://www.linkedin.com/in/jiro-delfino-1993991b0/"/>
                        <GitHub gitHubLink="https://github.com/JaydeeCode"/>
                    </ul>
                </nav>
                <Separator className="w-full" />
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5">
                    <p className="order-2 md:order-1">© {new Date().getFullYear()} Jiro Delfino. All rights reserved.</p>
                    <nav className="order-1 md:order-2">
                        <ul className="flex gap-5">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
export default Footer;