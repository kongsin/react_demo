import StyleableProps from "@/app/interfaces/StyleableProbs";
import { SlArrowRight } from "react-icons/sl";

const CustomNavigationRightButton = ({className = "", ...props }: StyleableProps) => {
    return (
       <div>
       <button className={`rounded-full bg-white p-2 ${className}`} 
       {...props}
       >
         <SlArrowRight className="w-2 h-2 text-black"/>
       </button>
       </div>
    )
}

export default CustomNavigationRightButton