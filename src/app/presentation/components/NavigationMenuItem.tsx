import StyleableProps from "@/app/interfaces/StyleableProbs";
import Link from "next/link";

interface NavigationMenuItemProps extends StyleableProps {
    component: React.ReactNode;
    text: string;
    showText?: boolean;
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
    component, 
    text, 
    className = "", 
    showText = true 
}) => (
    <li className={`mb-3 h-10 pl-2 flex flex-row items-center rounded hover:bg-gray-700 ${className}`}>
        {component}
        {showText && (
            <Link href="/transactions" className="p-2 ml-3 text-sm hidden xl:block">
                {text}
            </Link>
        )}
    </li>
);

export default NavigationMenuItem;
