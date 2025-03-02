import StyleableProps from "@/app/interfaces/StyleableProbs";
import { AiFillCaretDown } from "react-icons/ai";

const Header = ({ className }: StyleableProps) => {
    return (
        <header className={`bg-white shadow p-4 flex justify-between items-center ${className}`}>
            <h1 className="text-2xl font-normal text-gray-900">Overview</h1>
            <div className="flex flex-row items-center">
                <img className="rounded-full w-10 h-10 border-2 border-gray-300 object-cover" src="/avatar_preview.png" />
                <AiFillCaretDown size={12} className="text-gray-500" />
            </div>
        </header>
    );
};
export default Header;