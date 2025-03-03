import StyleableProps from "@/app/interfaces/StyleableProbs";
import Link from "next/link";

interface NavigationMenuItemProps extends StyleableProps {
    component: React.ReactNode;
    text: string;
    showText?: boolean;
    isSelected: boolean
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
    component, 
    text, 
    className = "", 
    showText = true ,
    isSelected
}) => (
    <li className={`mb-3 h-10 pl-2 flex flex-row items-center ${ isSelected ? ('bg-gray-700') : '' } rounded hover:bg-gray-700 ${className}`}>
        {component}
        {showText && (
            <Link href="/transactions" className="p-2 ml-2 text-xs font-bold hidden xl:block">
                {text}
            </Link>
        )}
    </li>
);

export default NavigationMenuItem;
