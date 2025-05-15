// import navigationLinks from "@/components/navigation-links";
import { Separator } from "@/components/ui/separator";
import { Linkedin } from 'lucide-react';

type FooterProps = {
    name: string;
}

const Footer = ({name} : FooterProps) => {
    return (
        <footer className="flex flex-col">
            <div className="flex flex-col items-center justify-center xl:py-20 xl:px-50 gap-5">
                <h1>{name}</h1>
                <h2>Frontend Developer crafting responsive, accessible, and visually engaging websites.</h2>
                <nav>
                    <ul className="flex gap-5">
                        <a href=""><Linkedin /></a>
                        <li>GitHub</li>
                    </ul>
                </nav>
                <Separator className="w-full" />
                <p>© 2025 Jiro Delfino. All rights reserved.</p>
            </div>
            

        </footer>
    )
}
export default Footer;