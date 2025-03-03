import StyleableProps from "@/app/interfaces/StyleableProbs";
import { AiFillCaretDown } from "react-icons/ai";

const Header = ({ className }: StyleableProps) => {
    return (
        <header className={`bg-white shadow p-4 flex justify-between items-center ${className}`}>
            <h1 className="text-2xl font-normal text-gray-900">Overview</h1>
            <div className="flex flex-row items-center">
                <div className="rounded-full w-10 h-10 bg-cyan-50 flex items-center justify-center">
                    <h1 className=" text-cyan-700 font-bold" >
                        JD
                    </h1>
                </div>
                <AiFillCaretDown size={12} className="text-gray-500 ml-1" />
            </div>
        </header>
    );
};
export default Header;