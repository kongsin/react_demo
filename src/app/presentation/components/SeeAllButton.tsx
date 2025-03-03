import StyleableProps from "@/app/interfaces/StyleableProbs"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export interface SeeAllProps extends StyleableProps {
    itemCount: number,
    page: string
}

const SeeAllButton = ({className, itemCount, page}: SeeAllProps) => {
    return (
        <Link href={page} className={`flex text-cyan-500 text-sm font-bold items-center ${className}`}>See All {itemCount}
            <span className="ml-1.5">
                <FaArrowRight />
            </span>
        </Link>
    )
}

export default SeeAllButton