import StyleableProps from "@/app/interfaces/StyleableProbs"
import { FaArrowRight } from "react-icons/fa"

export interface SeeAllProps extends StyleableProps {
    itemCount: number
}

const SeeAllButton = ({className, itemCount}: SeeAllProps) => {
    return (
        <a className={`flex text-cyan-500 text-sm font-bold items-center ${className}`}>See All {itemCount}
            <span className="ml-1.5">
                <FaArrowRight />
            </span>
        </a>
    )
}

export default SeeAllButton