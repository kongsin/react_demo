import StyleableProps from "@/app/interfaces/StyleableProbs";
import { SlArrowLeft } from "react-icons/sl";

const CustomNavigationLeftButton = ({className = "", ...props }: StyleableProps) => {
    return ( 
        <div>
            <button className={`rounded-full bg-white p-2 ${className}`} 
        {...props}
        >
        <SlArrowLeft className="w-2 h-2 text-black"/>
      </button>
        </div>
    )
}

export default CustomNavigationLeftButton